"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import postgres from "postgres";
import { z } from "zod";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Deck } from "./types";



const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: "require",
});


export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === "CredentialsSignin") {
                return "Invalid email or password.";
            }

            return "Something went wrong.";
        }

        throw error;
    }
}

const signupSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
});

export async function createUser(
    prevState: string | undefined,
    formData: FormData
) {
    const redirectTo =
        typeof formData.get("redirectTo") === "string"
            ? (formData.get("redirectTo") as string)
            : "/";

    const parsed = signupSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!parsed.success) {
        return "Invalid signup information.";
    }

    const { username, email, password } = parsed.data;

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users (
                username,
                email,
                password_hash
            )
            VALUES (
                ${username},
                ${email},
                ${passwordHash}
            )
        `;
    } catch (error) {
        return "Unable to create account.";
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo,
        });

        return undefined;
    } catch (error) {
        if (error instanceof AuthError) {
            return "Unable to sign you in automatically. Please log in.";
        }

        throw error;
    }
}

export async function createDeck(formData: FormData) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("Not authenticated");
    }

    const userId = session.user.id;

    const name = formData.get("name") as string;

    const cardIds = formData.getAll("cardIds") as string[];

    const deck = await sql`
        INSERT INTO decks (name, user_id)
        VALUES (${name}, ${userId})
        RETURNING id
    `;

    for (const cardId of cardIds) {
        await sql`
            INSERT INTO decks_dictionary (deck_id, dictionary_id)
            VALUES (${deck[0].id}, ${Number(cardId)})
        `;
    }

    redirect(`/flashcards/${deck[0].id}`);
}


export async function updateUserDeckStats(score: number, id: number) {
    await sql`
        UPDATE decks
        SET
            high_score = GREATEST(COALESCE(high_score, 0), ${score}),
            last_score = ${score},
            last_played = CURRENT_TIMESTAMP
        WHERE id = ${id};
    `;
}

export async function deleteDeck(deckId:number) {
    await sql`
        DELETE FROM decks
        WHERE id = ${deckId};
    `
    redirect('/decks');
    
}

export async function editDeck(deckId: number, formData: FormData) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("Not authenticated");
    }

    const name = String(formData.get("name") ?? "").trim();
    const cardIds = formData.getAll("cardIds").map((value) => Number(value)).filter((value) => !Number.isNaN(value));

    if (!name) {
        throw new Error("Deck name is required");
    }

    const deckOwnership = await sql<{ id: number }[]>`
        SELECT id
        FROM decks
        WHERE id = ${deckId} AND user_id = ${session.user.id}
    `;

    if (!deckOwnership.length) {
        throw new Error("You do not own this deck");
    }

    await sql`
        UPDATE decks
        SET name = ${name}
        WHERE id = ${deckId}
    `;

    await sql`
        DELETE FROM decks_dictionary
        WHERE deck_id = ${deckId}
    `;

    for (const cardId of cardIds) {
        await sql`
            INSERT INTO decks_dictionary (deck_id, dictionary_id)
            VALUES (${deckId}, ${cardId})
        `;
    }

    redirect("/decks");
}