import { Deck } from "@/app/lib/types";
import Link from "next/link";

export default function DeckSelector({deck}: {deck: Deck}){
    return(
        <div className="group h-64 w-48 [perspective:1000px]">
            <div className="h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                <div className="absolute inset-0  flex flex-col items-center p-2 rounded-xl text-emerald-400 border-3 border-gray-100 bg-gray-600 [backface-visibility:hidden]">
                    <p className="font-2xl font-bold ">
                        {deck.name}
                    </p>
                    <ul>
                        <li>
                            created at:{deck.created_at.toLocaleDateString()}
                        </li>

                        <li>
                            last played:{deck.last_played != null && deck.last_played.toLocaleDateString()}
                        </li>

                        <li>
                            last score:{deck.last_score}
                        </li>

                        <li>
                            high score:{deck.high_score != null && deck.high_score }
                        </li>
                        
                    </ul>

                </div>
                
                <div className=" absolute inset-0 rotate-y-180 flex flex-col items-center p-2 rounded-xl text-emerald-400 border-3 border-gray-100 bg-gray-600 [backface-visibility:hidden]">
                    <p className="font-2xl font-bold ">
                        {deck.name}
                    </p>
                    <p> CHARACTERS </p>
                    <Link href={`flashcards/${deck.id}`}> PLAY</Link>
                </div>
            </div>

        </div>
        

    );
}