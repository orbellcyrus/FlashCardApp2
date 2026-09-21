"use client"
import { useState } from "react";
import { Card } from "@/app/lib/types";

type MainTextCardProps = {
    currentCard: Card
}

export default function MainTextCard({currentCard}:MainTextCardProps){
    
    const [side, setSide] = useState(0);
    function handleCardClick(){
        setSide(side === 2 ? 0 : side+1);
    }
    
    return (
        <div className="flex  flex-col justify-center items-center bg-gray-800 p-2 rounded-xl gap-y-2 border-slate-200 border-2 font-sans text-bold-xl">
            <div className=" flex flex-row justify-center items-center bg-gray-800 rounded-xl gap-2 ">
                <div className={`transition-color duration-200 rounded-full p-1 text-m border-2 border-slate-500 ${side === 0 ? "bg-blue-200 text-slate-800" : "bg-gray-200 text-slate-500"} hover:scale-110`} >
                    <button onClick={()=>setSide(0)}>
                        English
                    </button>
                </div>
                
                <div className={`transition-color duration-200 rounded-full p-1 text-m border-2 border-slate-500 ${side === 1 ? "bg-orange-300 text-slate-800" : "bg-gray-200 text-slate-500"} hover:scale-110`}>
                    <button onClick={()=>setSide(1)}>
                        Tone
                    </button>
                </div>
                
                <div className={`transition-color duration-200 rounded-full p-1 text-m border-2 border-slate-500 ${side === 2 ? "bg-purple-300 text-slate-800" : "bg-gray-200 text-slate-500"} hover:scale-110`}>
                    <button onClick={()=>setSide(2)}>
                        Character
                    </button>
                </div>
            </div>

            <div className="group [perspective:1000px]" onClick={handleCardClick}>
                <div className={`relative h-80 w-56 transition-transform duration-500 [transform-style:preserve-3d] text-slate-700 text-3xl `}>

                    {/* english */}
                    <div className={`absolute inset-0 flex items-center justify-center rounded-xl bg-blue-200 [backface-visibility:hidden] transition-transform duration-500 transform-style:preserve-3d] ${side!=0 && "[transform:rotateY(-180deg)]"}`}>
                        {//currentCard.english
                        }
                    </div>

                    {/* pron */}
                    <div className={`absolute inset-0 flex items-center justify-center rounded-xl bg-orange-300 [backface-visibility:hidden] transition-transform duration-500 transform-style:preserve-3d]  ${side!=1 && "[transform:rotateY(-180deg)]"}`}>
                        {//currentCard.pronunciation
                        }
                    </div>

                    {/* chinese */}
                    <div className={`absolute inset-0 flex items-center justify-center rounded-xl bg-purple-300 [backface-visibility:hidden] transition-transform duration-500 transform-style:preserve-3d] ${side!=2 && "[transform:rotateY(-180deg)]"}`}>
                        {//currentCard.chinese_character
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
}