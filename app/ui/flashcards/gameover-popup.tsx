import { redirect } from "next/navigation";
type gameIsOverProps = {
    handleRestartClicked: () => void;
    handleFullRestartClicked:() => void;
}

export default function GameOverPopUp({handleRestartClicked,handleFullRestartClicked}:gameIsOverProps){
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="flex flex-col rounded-xl bg-white p-8 text-slate-800 gap-1 text-2xl [&>*]:rounded-full [&>*]:p-1 [&>*]:px-2 text-slate-900">
                {/*
                <button onClick={handleRestartClicked} className="bg-green-300 md:hover:bg-green-500">
                        Retry Unkown
                </button>
                */}
                

                <button onClick={handleFullRestartClicked} className="bg-yellow-200 md:hover:bg-yellow-500" >
                        Retry
                </button>

                <button onClick={() => redirect("/decks")} className="bg-rose-300 md:hover:bg-rose-400">
                        Back To Decks
                </button>
                    
            </div>
        </div>
    );
}