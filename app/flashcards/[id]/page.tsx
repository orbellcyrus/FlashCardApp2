import FlashCardController from "../../ui/flashcards/flashcards-controller";
import { getDeckWords } from "../../lib/data";

export default async function FlashCardsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const deckId = Number(id);

    const words = await getDeckWords(deckId);

    return (
        <main className="flex flex-col items-center justify-center">
            <FlashCardController data={words} />
        </main>
    );
}