import { auth } from "@/auth";
import { Suspense } from 'react';
import LoginOrSignUp from "../ui/login/login-or-sign-up";
export default function LoginPage() {
  return (
    <main className="flex justify-center md:h-screen mt-4">
        <LoginOrSignUp></LoginOrSignUp>
    </main>
  );
}   