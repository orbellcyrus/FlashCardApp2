import GameHistory from "./game-history";
export default function GameInformation(){
    return(
        <div className="flex flex-col bg-gray-800 border-2 border-white rounded-xl mb-2">
            <div className="flex flex-row justify-evenly">
                <p>Score:{10}</p>
                <p>Index:{10}/{10}</p>
            </div>
            <GameHistory currentIndex={2} allCards={[{id:1,chinese_character:"2", english:"fds",pronunciation:"fsdf"}]}>

            </GameHistory>

        </div>
    );
}