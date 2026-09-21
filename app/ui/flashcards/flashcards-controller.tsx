import { useState } from "react";
import { Card, HistoryEntry } from "@/app/lib/types";
import GameButtons from "./game-buttons";
import GameInformation from "./game-information";

export default function FlashCardController(){
    const [index,setIndex] = useState(0);
    const [history,setHistory] = useState<HistoryEntry[]>([]);
    const data:Card[] = [{id:1,chinese_character:"你",pronunciation:"ni3",english:"you"},{id:2,chinese_character:"我",pronunciation:"wo3",english:"I"},{id:3,chinese_character:"他",pronunciation:"ta3",english:"he"}];
    
    const handleCorrectClicked = () =>{
        if(!isDone){
            history.push({id:data[index].id,known:true});
            setIndex(index+1);
        }
    }

    const handleWrongClicked = () =>{
        if(!isDone){
            history.push({id:data[index].id,known:false});
            setIndex(index+1);
        }
    }

    const handleUndoClicked = () =>{
        if(index < 0){
            history.pop();
            setIndex(index-1);
        }
        
    }
    const isDone = () =>{
        return index === data.length
    }

    return(
        <>
            <GameInformation>
            </GameInformation>
        </>
    )


}