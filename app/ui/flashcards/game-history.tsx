import { Triangle } from "lucide-react";
import { Card } from "@/app/lib/types";



type GameHistoryProps = {
    currentIndex: number;
    allCards: Card[];
}
export default function GameHistory({currentIndex,allCards}:GameHistoryProps){
    return(
        <div className="mb-2 flex flex-row items-center justify-between p-2 rounded-xl">
            <button>
                <Triangle
                    className="-rotate-90 hover:fill-white"
                >
                </Triangle>
            </button>

            <div className="flex flex-row justify-center items-center">
                {
                    allCards.map((card)=>(
                            <div className="bg-slate-600 rounded-xl p-1 hover:transform-1" key={card.id}>
                                
                            </div>
                    ))
                }

                    
            </div>

            <button>
                <Triangle
                    className="rotate-90 hover:fill-white"
                >
                </Triangle>
            </button>

        </div>
    )
    
}