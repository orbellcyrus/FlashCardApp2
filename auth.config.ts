import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
    },

    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const protectedRoutes = [
                "/"      
            ];

            const isProtected = protectedRoutes.some((route) =>
                nextUrl.pathname.startsWith(route)
            );

            if (isProtected && !isLoggedIn) {
                return false;
            }

            return true;
        },
    },

    providers: [],
} satisfies NextAuthConfig;

