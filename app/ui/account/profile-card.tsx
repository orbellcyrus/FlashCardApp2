import { User } from "lucide-react";
import { auth } from "@/auth";

export default async function ProfileCard(){
    const session = await auth();

    if (!session) {
        throw new Error("Unauthorized");
    }

    return(
        <div className="w-fit flex-col rounded-xl p-2 border-2 border-white text-slate-100 font-sans ">
            <div className="flex flex-row justify-center items-center text-xl">
                <User
                    color="white"
                    size={64}
                >                    
                </User>
                <p>
                    {session.user.name}
                </p>

                <p>
                    Email: {session.user.email}
                </p>
            </div>
           

            
         
        </div>
    );
}