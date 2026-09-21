"use client"
import { Undo, Check, X} from "lucide-react"
import MainTextCard from "./main-text-card";
import { Card } from "@/app/lib/types";
type GameButtonsProps = {
    handleRightClicked: () => void;
    handleWrongClicked: () => void;
    handleUndoClicked: () => void;
    currentCard: Card;
}

export default function GameButtons({handleRightClicked, handleWrongClicked, handleUndoClicked,  currentCard}:GameButtonsProps){
    return(

        <div className = "flex md:flex-row flex-col items-stretch bg-gray-800 rounded-xl p-2 gap-2 border-2 border-white text-slate-800" >

            <button onClick = {handleUndoClicked}  className = "flex flex-col justify-center items-center rounded-xl border-2 border-white p-2  duration-200 bg-yellow-200 active:bg-yellow-300 hover:bg-yellow-300">
                <Undo> </Undo>
                Undo
            </button>
            <MainTextCard currentCard = {currentCard} />

            <div className = "flex flex-col justify-evenly border-2 border-white rounded-xl" >
                <button onClick={handleRightClicked}  
                    className = "flex flex-col justify-center items-center h-full rounded-xl border-b-1 border-white rounded-b-none rounded p-2  duration-200  bg-emerald-400  active:text-slate-200 hover:text-slate-200">
                    <Check></Check>
                    Right
                </button>

                <button onClick={handleWrongClicked} 
                    className = "flex flex-col justify-center items-center h-full rounded-xl border-t-1 border-white rounded-t-none rounded p-2 duration-200  bg-rose-400  active:text-slate-200 hover:text-slate-200">
                    <X></X>
                    Wrong
                </button>
            </div>
        </div>
    );
}