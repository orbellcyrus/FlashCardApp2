import { signOut } from "@/auth";

export default function LogoutButton() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut({
                    redirectTo: "/login",
                });
            }}
        >
            <button type="submit" className="rounded-xl p-2 border-1 border-white hover:text-red-500 text-2xl  mt-2">
                Sign Out
            </button>
        </form>
    );
}