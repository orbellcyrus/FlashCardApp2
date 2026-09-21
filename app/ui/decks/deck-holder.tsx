"use client"
import { useState } from "react";
import DeckSelector from "./deck-selector";
import { Deck } from "@/app/lib/types";
import Filter from "./filter";


export default function DeckHolder({decks}:{decks:Deck[]}) {
    const [filter, setFilter] = useState("all");

    const sortedDecks = [...decks].sort((a, b) => {
        if (filter === "favorites") {
            const aTime = a.last_played ? new Date(a.last_played).getTime() : 0;
            const bTime = b.last_played ? new Date(b.last_played).getTime() : 0;
            return bTime - aTime;
        }

        if (filter === "recent") {
            const aTime = new Date(a.created_at).getTime();
            const bTime = new Date(b.created_at).getTime();
            return bTime - aTime;
        }

        return a.name.localeCompare(b.name);
    });

    const deckSelectors = sortedDecks.map((deck) => (
        <DeckSelector key={deck.id} deck={deck} />
    ));

    return (
        <div>
            <div className="my-4">
                <Filter
                    filter={filter}
                    onFilterChange={setFilter}
                />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {deckSelectors}
            </div>
        </div>
    );
}