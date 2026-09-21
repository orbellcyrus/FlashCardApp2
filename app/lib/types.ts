export type Card = {
    id: number;
    english: string;
    pronunciation: string;
    chinese_character: string;
}

export type HistoryEntry = {
    id: number;
    known: boolean;
}