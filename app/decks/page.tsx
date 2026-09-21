import DeckSearchBar from "../ui/decks/deck-search-bar";
import DeckHolder from "../ui/decks/deck-holder";
import Link from "next/link";
export default function DecksPage(){
    return(
        <main className="flex flex-col justify-center items-center w-full bg-red-200">
            <DeckSearchBar placeholder="find a deck"></DeckSearchBar>
            <DeckHolder></DeckHolder>
        </main>
    );
}