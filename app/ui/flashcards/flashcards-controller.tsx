"use client"
import { useState } from "react";
import { Card, HistoryEntry } from "@/app/lib/types";
import GameButtons from "./game-buttons";
import GameInformation from "./game-information";
import GameHistory from "./game-history";
import GameOverPopUp from "./gameover-popup";
import { updateUserDeckStats } from "@/app/lib/actions";


export default function FlashCardController({data}:{data:Card[]}){
    console.log(data);
    const [index,setIndex] = useState(0);
    const [history,setHistory] = useState<HistoryEntry[]>([]);
    const [score,setScore] = useState(0);
    const [gameIsOver,setGameIsOver] = useState(false);
    
    const handleCorrectClicked = () =>{
        if(index < data.length-1){
            setHistory(prev => [...prev,{id:data[index].id,known:true}])
            setIndex(index+1);
            setScore(score+1);
            console.log(history);
        }else{
            handleGameOver();
        }
    }

    const handleWrongClicked = () =>{
        if(index < data.length-1){
            setHistory(prev => [...prev,{id:data[index].id,known:false}]);
            setIndex(index+1);
        }else{
            handleGameOver();
        }
    }

    const handleUndoClicked = () =>{
        if(index > 0){
            if(history[index-1].known===true){
                setScore(score-1);
            }
            setHistory(prev => prev.slice(0, -1));
            setIndex(index-1);

        }
        
    }
    function handleRestartClicked(){
        setIndex(0);
        setHistory([]);
        setGameIsOver(false);
        setScore(0);
    }
    function handleFullRestartClicked(){
        setIndex(0);
        setHistory([]);
        setGameIsOver(false);
        setScore(0);
    }

    function handleGameOver(){
        updateUserDeckStats(score);
        setGameIsOver(true);
    }
    
    

    return(
        <>
            { 
                gameIsOver && <GameOverPopUp handleRestartClicked={handleRestartClicked} handleFullRestartClicked={handleFullRestartClicked} ></GameOverPopUp>
            }
            <GameInformation
                index = {index}
                totalCards={data.length}
                score={score}
            ></GameInformation>

            <GameHistory currentHistory={history} allCards={data}>

            </GameHistory>
            <GameButtons handleRightClicked={handleCorrectClicked} handleWrongClicked={handleWrongClicked} handleUndoClicked={handleUndoClicked} currentCard={data[index]}></GameButtons>
        </>
    )


}