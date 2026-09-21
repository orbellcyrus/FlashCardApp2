
"use client"
import { Card,HistoryEntry } from "@/app/lib/types";
import { useState } from "react";
type side = "english" | "chinese_character" | "pronunciation";


type GameHistoryProps = {
    currentHistory: HistoryEntry[];
    allCards: Card[];
}
export default function GameHistory({currentHistory,allCards}:GameHistoryProps){
    const remainingCards = allCards.slice(currentHistory.length);
    const [side,setSide] = useState<side>("english")
    function changeSide(){
        if (side == "english") setSide("pronunciation");
        if (side == "pronunciation") setSide("chinese_character");
        if(side == "chinese_character") setSide("english")
    }
    return(
        <div className="flex flex-row items-center justify-between p-2 rounded-xl ">
            
            <div className="flex flex-row justify-center items-center gap-2">
                {
                    currentHistory.map((card)=>(
                            <div className={`rounded-xl p-1 hover:transform-1 text-slate-900 ${card.known ? "bg-green-300" : "bg-red-400" }`} onClick={changeSide} key={card.id}>
                                {side == "english" && allCards.find(c => c.id === card.id)?.english}
                                {side == "chinese_character" && allCards.find(c => c.id === card.id)?.chinese_characters}   
                                {side == "pronunciation" && allCards.find(c => c.id === card.id)?.pronunciation}                                  
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
            

        </div>
    )
    
}