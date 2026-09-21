import CreateFormater from "../ui/create/create-formater";
import { getDictionaryCards } from "../lib/data";
export default async  function CreateDeckPage() {
    const allCards = await getDictionaryCards();
    return (
        
        
        <CreateFormater allCards= {allCards}></CreateFormater>
    );
} 