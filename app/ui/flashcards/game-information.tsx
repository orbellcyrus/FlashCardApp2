type GameInformationProps = {
    index: number;
    score: number;
    totalCards: number;
}
export default function GameInformation({index,score,totalCards}:GameInformationProps){
    return(
        <div className="border-2 border-white rounded-xl p-2">
            <div className="flex flex-row justify-evenly gap-2">
                <p>Score:{score}</p>
                <p>Postion:{index}/{totalCards}</p>
            </div>
            

        </div>
    );
}