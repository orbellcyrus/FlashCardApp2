import Link from "next/link";
import { House, User, Plus, RectangleVertical   } from "lucide-react";

export default function NavBar(){
    return(
        <nav className="flex flex-row justify-center gap-2 p-2 bg-gray-800 md:text-2xl text-xl w-screen">
            <Link href={"/"} className="group flex flex-row items-center transition-all  md:hover:text-green-600 active:text-green-600">
                Home
                <House 
                    size={25}
                >
                </House>
            </Link> 

            <Link href={"/decks"} className="group flex flex-row items-center transition-all md:hover:text-green-600 active:text-green-600">
                Decks
                <RectangleVertical
                size={25}
                >
                </RectangleVertical>    
            </Link>

            <Link href={"/create"} className="group flex flex-row items-center transition-all md:hover:text-green-600 active:text-green-600">
                Create
                <Plus
                    size={25}
                >
                </Plus>
            </Link>

            <Link href={"/account"} className="group flex flex-row items-center transition-all  md:hover:text-green-600 active:text-green-600">
                Account
                <User
                    size={30}
                >
                </User>
            </Link>
        </nav>
    );
}