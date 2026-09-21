import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
import { Card,Deck } from './types';
import { auth } from '@/auth';

export async function fetchCharacters(){
    const data = sql`SELECT * FROM DICTIONARY`
    return data;
}

export async function fetchDecks(user:number){
    const data = sql`SELECT * FROM decks`
    return data;
}


export async function getDictionaryCards() {
    const cards = await sql<Card[]>`
        SELECT id, chinese_characters, pronunciation, english
        FROM dictionary
        ORDER BY id
    `;

    return cards;
}

export async function getDeckWords(deck_id: number) {
    const words = await sql<Card[]>`
        SELECT 
            dictionary.id,
            dictionary.english,
            dictionary.chinese_characters,
            dictionary.pronunciation
            
        FROM dictionary
        JOIN decks_dictionary
            ON dictionary.id = decks_dictionary.dictionary_id
        WHERE decks_dictionary.deck_id = ${deck_id}
        ORDER BY dictionary.id
    `;

    return words;
}


export async function getUserDecks() {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("Not authenticated");
    }
    const userId = session.user.id;

    const decks = await sql<Deck[]>`
    
        SELECT 
        id,
        name,
        user_id,
        created_at,
        last_played,
        last_score,
        high_score

        FROM decks
        
        WHERE user_id = ${userId}
        ORDER BY id

    `
    return decks;
}