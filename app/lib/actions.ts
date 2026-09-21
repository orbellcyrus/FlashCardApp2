"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import postgres from "postgres";
import { z } from "zod";

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

        return undefined;
    } catch (error) {
        return "Unable to create account.";
    }
}

