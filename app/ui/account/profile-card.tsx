import { User } from "lucide-react";
export default function ProfileCard(){
    return(
        <div className="w-fit flex-col rounded-xl p-2 bg-gray-800 text-slate-100 font-sans">
            <div className="flex flex-row justify-center items-center text-xl">
                <User
                    color="green"
                    size={64}
                >                    
                </User>
                <p>
                    Username
                </p>
            </div>
            <div>
                <ul className="border-2 border-emerald-600 p-2 rounded-xl">
                    <li>Stat1</li>
                    <li>Stat2</li>
                    <li>Stat3</li>
                </ul>
            </div>
            
        </div>
    );
}