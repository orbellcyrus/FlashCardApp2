"use client"
import { useState } from "react";
import { Card, HistoryEntry } from "@/app/lib/types";
import GameButtons from "./game-buttons";
import GameInformation from "./game-information";
import GameHistory from "./game-history";
import GameOverPopUp from "./gameover-popup";
import { updateUserDeckStats } from "@/app/lib/actions";


export default function FlashCardController({data,deckId}:{data:Card[],deckId:number}){
    console.log(data);
    const [index,setIndex] = useState(0);
    const [history,setHistory] = useState<HistoryEntry[]>([]);
    const [score,setScore] = useState(0);
    const [gameIsOver,setGameIsOver] = useState(false);
    const [modifiedData , setModifiedData] = useState([]);

    
    const handleCorrectClicked = () =>{
        const currentCard = data[index];
        const nextHistory = [...history, { id: currentCard.id, known: true }];
        const nextScore = score + 1;
        

        if (index < data.length - 1) {
            setHistory(nextHistory);
            setIndex(index + 1);
            setScore(nextScore);
            skipKnown();
            return;
        }

        setHistory(nextHistory);
        setScore(nextScore);
        handleGameOver(nextScore);
    }

    const handleWrongClicked = () =>{
        const currentCard = data[index];
        const nextHistory = [...history, { id: currentCard.id, known: false }];

        if (index < data.length - 1) {
            setHistory(nextHistory);
            if(history[index+1].known===true){
            skipKnown();

            }
            setIndex(index + 1);
            return;
        }

        setHistory(nextHistory);
        handleGameOver(score);
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
        setHistory(prev => prev.filter(historyEntry => historyEntry.known == true));
        skipKnown();
        setIndex(0);
        setGameIsOver(false);
        setScore(0);
    }


    function handleFullRestartClicked(){
        setIndex(0);
        setHistory([]);
        setGameIsOver(false);
        setScore(0);
    }

    function handleGameOver(finalScore = score){
        updateUserDeckStats(finalScore, deckId);
        setGameIsOver(true);
    }

    function skipKnown(){
        while(history[index].known==true){
            setIndex(index+1);
        }
    }
    
    

    return(
        <>
            { 
                gameIsOver && <GameOverPopUp handleRestartClicked={handleRestartClicked} handleFullRestartClicked={handleFullRestartClicked} ></GameOverPopUp>
            }
            <div className="mt-2">
                <GameInformation
                index = {index}
                totalCards={data.length}
                score={score}
                ></GameInformation>
            </div>
            <div className="mt-2">
                <GameHistory currentHistory={history} allCards={data}></GameHistory>
            </div>
            <div className="mt-4">
                <GameButtons handleRightClicked={handleCorrectClicked} handleWrongClicked={handleWrongClicked} handleUndoClicked={handleUndoClicked} currentCard={data[index]}></GameButtons>
            </div>   
        </>
    )


}

