import { User } from "lucide-react";
import { auth } from "@/auth";

export default async function ProfileCard(){
    const session = await auth();

    if (!session) {
        throw new Error("Unauthorized");
    }

    return(
        <div className="w-fit flex-col rounded-xl p-2 border-2 border-white text-slate-100 font-sans ">
            <div className="flex flex-row justify-center items-center text-xl gap-4">
                <User
                    color="white"
                    size={64}
                >                    
                </User>
                <p>
                    {session.user.name}
                </p>

                <div className=" flex flex-row">
                    <p>
                        Email: 
                    </p>
                    <p className="blur hover:blur-none transition-all flex flex-row">
                        {session.user.email}
                    </p>
                    
                </div>
            </div>
           

            
         
        </div>
    );
}