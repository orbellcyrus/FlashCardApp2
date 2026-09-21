import { editDeck } from "@/app/lib/actions";
import { Card } from "@/app/lib/types";

export default function CurrentlyInDeckEdit({
    deckId,
    cards,
    onCardRemoved,
}: {
    deckId: number;
    cards: Card[];
    onCardRemoved: (card: Card) => void;
}) {
    return (
        <form action={editDeck.bind(null, deckId)}>
            <input
                name="name"
                placeholder="Deck name"
                required
                className="rounded-xl border-2 border-white p-2 text-xl w-8/10 m-2"
            />
            <button type="submit" className="hover:text-green-600 border-2 border-white p-2 rounded-xl">
                Edit Deck
            </button>
            <div>
                <ul>
                    {cards.map((card) => (
                        <li key={card.id}>
                            <label className="flex m-3 gap-3 bg-gray-900 rounded-xl p-1 cursor-pointer">
                                <input
                                    type="hidden"
                                    name="cardIds"
                                    value={card.id}
                                />

                                <span>{card.chinese_characters}</span>
                                <span>{card.pronunciation}</span>
                                <span>{card.english}</span>
                                <button type="button" onClick={() => onCardRemoved(card)} className="hover:text-red-400">
                                    Remove Card
                                </button>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}