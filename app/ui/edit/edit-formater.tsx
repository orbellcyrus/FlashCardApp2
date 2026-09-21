"use client"
import { useState } from "react";
import AllCharacters from "../create/all-characters";
import CurrentlyInDeckEdit from "./currently-in-deck-edit";
import { Card } from "@/app/lib/types";

export default function EditFormater({
    deckId,
    allCards,
    inDeckEdit,
}: {
    deckId: number;
    allCards: Card[];
    inDeckEdit: Card[];
}) {
    const [inDeck, setInDeck] = useState<Card[]>(inDeckEdit);

    function handleCardAdded(card: Card) {
        setInDeck((current) => [...current, card]);
    }

    function handleCardRemoved(removed: Card) {
        setInDeck((current) => current.filter((card) => card.id !== removed.id));
    }

    return (
        <div className="w-[90%] mx-auto mt-2 grid grid-cols-2 gap-4 [&>*]:border-white [&>*]:border-2 [&>*]:min-h-screen">
            <div>
                <AllCharacters onCardAdded={handleCardAdded} allCards={allCards} inDeck={inDeck}></AllCharacters>
            </div>

            <div>
                <CurrentlyInDeckEdit deckId={deckId} cards={inDeck} onCardRemoved={handleCardRemoved}></CurrentlyInDeckEdit>
            </div>
        </div>
    );
}