"use client";

import { useActionState } from "react";
import { createUser } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";

export default function SignUpForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, formAction, isPending] =
        useActionState(createUser, undefined);

    return (
        <div className="bg-white text-black p-4 rounded-xl">
            <form action={formAction} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="font-medium">Username</label>
                    <input
                        id="username"
                        className="border-2 border-black rounded px-2 py-1"
                        type="text"
                        name="username"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-medium">Email</label>
                    <input
                        id="email"
                        className="border-2 border-black rounded px-2 py-1"
                        type="email"
                        name="email"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-medium">Password</label>
                    <input
                        id="password"
                        className="border-2 border-black rounded px-2 py-1"
                        type="password"
                        name="password"
                        required
                        minLength={6}
                    />
                </div>

                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <button disabled={isPending} className="rounded bg-black text-white px-3 py-2">
                    Sign Up
                </button>

                {errorMessage && (
                    <p className="text-red-600">{errorMessage}</p>
                )}
            </form>
        </div>
    );
}