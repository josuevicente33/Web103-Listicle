import { pool } from '../config/database.js';

export const getAllCharacters = async (req, res) => {
    try { 
        const gifts = await pool.query('SELECT * FROM characters');
        res.status(200).json(gifts.rows);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addCharacter = async (req, res) => {

}

export const deleteCharacter = async (req, res) => {

}

export default { getAllCharacters };