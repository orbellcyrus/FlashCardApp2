"use client"
import { Undo, Check, X} from "lucide-react"
import { useState } from "react";
import MainTextCard from "./main-text-card";
import { Card } from "@/app/lib/types";
type GameButtonsProps = {
    handleRightClicked: () => void;
    handleWrongClicked: () => void;
    handleUndo: () => void;
    currentCard: Card;
}

export default function GameButtons({handleRightClicked, handleWrongClicked, handleUndo,  currentCard}:GameButtonsProps){
    const [nextSide,setNextSide] = useState(0);
    function handleCardClick(){
        nextSide === 2 ? setNextSide(0) : setNextSide(nextSide + 1);
        
    }
    return(

        <div className = "flex md:flex-row flex-col items-stretch bg-gray-800 rounded-xl p-2 gap-2 border-2 border-white text-slate-800" >
        
            
            <button onClick = {handleUndo}  className = "flex flex-col justify-center items-center rounded-xl border-2 border-white p-2 transition-all duration-200 ease-in bg-yellow-200 active:bg-yellow-300 hover:bg-yellow-300">
                <Undo> </Undo>
                Undo
            </button>
            

            <MainTextCard currentCard = {currentCard} />

            
           
           
            <div className = "flex flex-col justify-evenly border-2 border-white rounded-xl" >
                <button onClick={handleRightClicked}  
                    className = "flex flex-col justify-center items-center h-full rounded-xl border-b-1 border-white rounded-b-none rounded p-2 transition-all duration-200 ease-in bg-emerald-400 active:bg-emerald-600 active:text-slate-200 hover:bg-emerald-600 hover:text-slate-200">
                    <Check></Check>
                    Right
                </button>

                <button onClick={handleWrongClicked} 
                    className = "flex flex-col justify-center items-center h-full rounded-xl border-t-1 border-white rounded-t-none rounded p-2 transition-all duration-200 ease-in bg-rose-400 active:bg-rose-500 active:text-slate-200 hover:bg-rose-500 hover:text-slate-200">
                    <X></X>
                    Wrong
                </button>
            </div>
        </div>
    );
}