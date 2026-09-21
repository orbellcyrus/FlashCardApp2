import DeckSelector from "./deck-selector";
import { getUserDecks } from "@/app/lib/data";

export default async function DeckHolder() {
    const decks = await getUserDecks();

    
    const deckSelectors = decks.map((deck) => (
        <DeckSelector key={deck.id} deck={deck} />
    ));

    return (
        <div>
            {deckSelectors}
        </div>
    );
}