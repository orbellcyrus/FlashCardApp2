"use client"
import { useState } from "react";
import AllCharacters from "./all-characters";
import CurrentlyInDeck from "./currently-in-deck";
import { Card } from "@/app/lib/types";
export default function CreateFormater({allCards,inDeckEdit}:{allCards:Card[],inDeckEdit:Card[]}){
    const [inDeck,setInDeck] = useState<Card[]>(inDeckEdit);
    function handleCardAdded(card: Card) {
        setInDeck((current) => [...current, card]);
    }
    function handleCardRemoved(removed: Card) {
        setInDeck(inDeck.filter((card) => card !== removed));
    }
    return(
        <div className="w-[90%] mx-auto mt-2 grid grid-cols-2 gap-4 [&>*]:border-white [&>*]:border-2 [&>*]:min-h-screen">
            <div>         
                <AllCharacters  onCardAdded={handleCardAdded} allCards={allCards} inDeck={inDeck} ></AllCharacters>               
            </div>

            <div>
                <CurrentlyInDeck cards={inDeck} onCardRemoved={handleCardRemoved}></CurrentlyInDeck>
            </div>

        </div>
    )


}