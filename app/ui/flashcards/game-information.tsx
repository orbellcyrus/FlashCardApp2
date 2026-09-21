type GameInformationProps = {
    index: number;
    score: number;
    totalCards: number;
}
export default function GameInformation({index,score,totalCards}:GameInformationProps){
    return(
        <div className="flex flex-col bg-gray-800 border-2 border-white rounded-xl mb-2">
            <div className="flex flex-row justify-evenly">
                <p>Score:{score}</p>
                <p>Postion:{index}/{totalCards}</p>
            </div>
            

        </div>
    );
}