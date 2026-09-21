
import { useState } from "react";
import { Card } from "@/app/lib/types";
import { Plus } from "lucide-react";

type AllCharactersProps = {
    onCardAdded: (card: Card) => void;
    allCards: Card[];
    inDeck: Card[];
};

export default function AllCharacters({
    onCardAdded,
    allCards,
    inDeck,
}: AllCharactersProps) {
    const [search, setSearch] = useState("");

    const filteredCards = allCards.filter((card) => {
        const isInDeck = inDeck.some((deckCard) => deckCard.id === card.id);
        const query = search.trim().toLowerCase();

        if (isInDeck) {
            return false;
        }

        if (!query) {
            return true;
        }

        const normalizedQuery = query.replace(/[0-9]/g, "");

        return [card.chinese_characters, card.pronunciation, card.english]
            .some((value) => {
                const text = String(value).toLowerCase();
                const normalizedText = text.replace(/[0-9]/g, "");

                return text.includes(query) || normalizedText.includes(normalizedQuery);
            });
    });

    return (
        <div>
            <input
                className="rounded-xl border-2 border-white p-2 text-xl w-9/10 m-2"
                placeholder="Find Characters"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <ul>
                {filteredCards.map((card) => (
                    <li key={card.id} className="flex m-3 gap-3 group bg-gray-900 rounded-xl p-1 [&*>]cursor-pointer" onClick={() => onCardAdded(card)}>
                        <span>{card.chinese_characters}</span>
                        <span>{card.pronunciation}</span>
                        <span>{card.english}</span>
                        <p  className="group-hover:text-green-500 flex flex-f cursor-pointer">
                            Add Card
                            
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
} 