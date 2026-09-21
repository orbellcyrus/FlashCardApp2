import GameButtons from "../ui/flashcards/game-buttons"
import GameInformation from "../ui/flashcards/game-information"

export default function FlashCardsPage(){
    return(
        <main className="flex flex-col justify-center items-center ">
            <div className="pt-2">
                <GameInformation></GameInformation>
                <GameButtons></GameButtons>
            </div>
            
            
            

        </main>
    )
}