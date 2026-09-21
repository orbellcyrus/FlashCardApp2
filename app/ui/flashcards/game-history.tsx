import { Triangle } from "lucide-react";
import { Card,HistoryEntry } from "@/app/lib/types";



type GameHistoryProps = {
    currentHistory: HistoryEntry[];
    allCards: Card[];
}
export default function GameHistory({currentHistory,allCards}:GameHistoryProps){
    const remainingCards = allCards.slice(currentHistory.length);
    return(
        <div className="mb-2 flex flex-row items-center justify-between p-2 rounded-xl ">
            <button>
                <Triangle className="-rotate-90 hover:fill-white" > </Triangle>
            </button>

            <div className="flex flex-row justify-center items-center gap-2">
                {
                    currentHistory.map((card)=>(
                            <div className={`rounded-xl p-1 hover:transform-1 text-slate-900 ${card.known ? "bg-green-300" : "bg-red-400" }`}  key={card.id}>
                                {allCards.find(c => c.id === card.id)?.english}                               
                            </div>
                    ))
                }
                
                {remainingCards.map((card) =>(
                    <div className={`rounded-xl p-1 hover:transform-1 text-slate-900 bg-slate-300`}  key={card.id}>
                        ?                            
                    </div>
                )


                )
                
                }

            </div>
            

            <button>
                <Triangle
                    className="rotate-90 hover:fill-white" ></Triangle>
            </button>

        </div>
    )
    
}