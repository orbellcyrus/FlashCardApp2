import { getUserDecks } from "../lib/data";
import DeckHolder from "../ui/decks/deck-holder";

export default function DecksPageLoading(){
   
    return(
        <main className="flex flex-col justify-center items-center w-full ">
            <p> loading decks</p>
        </main>
    );
}