export type Card = {
    id: number;
    english: string;
    pronunciation: string;
    chinese_characters: string;
}

export type HistoryEntry = {
    id: number;
    known: boolean;
}

export type Deck = {
    id: number;
    name: string;
    user_id: number;
    created_at: Date;
    last_played: Date | null;
    last_score: number | null;
    high_score: number | null;

}