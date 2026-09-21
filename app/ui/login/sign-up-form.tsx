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
        <div className="bg-white text-black p-2">
            <form action={formAction}>
                <input
                    className="border-2 border-black"
                    type="text"
                    name="username"
                    required
                />
                <input
                    className="border-2 border-black"
                    type="email"
                    name="email"
                    required
                />

                <input
                    className="border-2 border-black"
                    type="password"
                    name="password"
                    required
                    minLength={6}
                />
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <button disabled={isPending}>
                    SignUp
                </button>

                {errorMessage && (
                    <p className="text-red-800">{errorMessage}</p>
                )}
            </form>

        </div>
        
    );
}