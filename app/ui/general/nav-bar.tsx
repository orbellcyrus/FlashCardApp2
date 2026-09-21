import Link from "next/link";
import { House, User, Plus, RectangleVertical   } from "lucide-react";

export default function NavBar(){
    return(
        <div className="flex justify-center items-center">

        
        <nav className=" sticky flex flex-row justify-center md:gap-12 gap-2 p-4 bg-black md:text-2xl text-l  z-100 rounded-full border-3 border-gray-400">
    
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
        </div>
    );
}