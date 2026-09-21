import { createDeck } from "@/app/lib/actions";
import { Card } from "@/app/lib/types";
export default function CurrentlyInDeck({cards,onCardRemoved}:{cards:Card[],onCardRemoved: (card: Card) => void;}){
    return(
       <form action={createDeck}>
                   <input
                       name="name"
                       placeholder="Deck name"
                       required
                    className="rounded-xl border-2 border-white p-2 text-xl w-8/10 m-2"
                   />
                    <button type="submit" className="hover:text-green-600 border-2 border-white p-2 rounded-xl">
                        Create Deck
                    </button>
                   <div>
                       <ul>
                         
       
                       
                           {cards.map((card) => (
                               <li>
                                   <label key={card.id} className="flex m-3 gap-3 bg-gray-900 rounded-xl p-1">
                                       <input
                                            
                                           type="hidden"
                                           name="cardIds"
                                           value={card.id}
                                       />
       
                                       <span>{card.chinese_characters}</span>
                                       <span>{card.pronunciation}</span>
                                       <span>{card.english}</span>
                                       <button onClick={()=>onCardRemoved(card)} className="hover:text-red-400">
                                            {"Remove Card"}
                                        </button>
                                   </label>
                                   
                                   
                               </li>
                               
                           ))}
                       </ul>
                   </div>
       
                   
               </form>
    );
}