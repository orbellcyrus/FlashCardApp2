import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import bcrypt from "bcrypt";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: "require",
});

async function getUser(email: string) {
    const users = await sql<{
        id: number;
        username: string;
        email: string;
        password_hash: string;
    }[]>`
        SELECT id, username, email, password_hash
        FROM users
        WHERE email = ${email}
    `;

    return users[0];
}

export const {
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
            }

            return session;
        },
    },


    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string().email(),
                        password: z.string().min(6),
                    })
                    .safeParse(credentials);

                if (!parsedCredentials.success) {
                    return null;
                }

                const { email, password } = parsedCredentials.data;

                const user = await getUser(email);

                if (!user) {
                    return null;
                }

                const passwordsMatch = await bcrypt.compare(
                    password,
                    user.password_hash
                );

                if (!passwordsMatch) {
                    return null;
                }

                return {
                    id: user.id.toString(),
                    name: user.username,
                    email: user.email,
                };
            },
        }),
    ],
});