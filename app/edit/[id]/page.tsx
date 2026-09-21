import EditFormater from "@/app/ui/edit/edit-formater";
import { getDictionaryCards } from "@/app/lib/data";
import { getDeckWords } from "@/app/lib/data";
export default async function EditDeckPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const deckId = Number(id);
    const allCards = await getDictionaryCards();
    const inDeck = await getDeckWords(deckId);

    return (
        <EditFormater deckId={deckId} allCards={allCards} inDeckEdit={inDeck}></EditFormater>
    );
}