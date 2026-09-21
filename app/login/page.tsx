import { auth } from "@/auth";
import { Suspense } from 'react';
import LoginOrSignUp from "../ui/login/login-or-sign-up";
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
        <LoginOrSignUp></LoginOrSignUp>
    </main>
  );
}   