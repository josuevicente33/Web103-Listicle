import { pool } from '../config/database.js';

export const getAllCharacters = async (req, res) => {
    try { 
        const gifts = await pool.query('SELECT * FROM characters ORDER BY id ASC');
        res.status(200).json(gifts.rows);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getCharacterById = async (req, res) => {
    const { characterId } = req.params;
    try {
        const characterData = await pool.query('SELECT * FROM characters WHERE id = $1', [characterId]);
        if (characterData.rows.length === 0) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.status(200).json(characterData.rows[0]);
    } catch (error) {
        console.error('Error fetching character by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const addCharacter = async (req, res) => {
    const { slug, name, alias, role, affiliations, image, description, infoUrl } = req.body;
    try {
        const newCharacter = await pool.query(
            'INSERT INTO characters (slug, name, alias, role, affiliations, image, description, infoUrl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [slug, name, alias, role, affiliations, image, description, infoUrl]
        );
        res.status(201).json(newCharacter.rows[0]);
    } catch (error) {
        console.error('Error adding character:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteCharacter = async (req, res) => {
    const { characterId } = req.params;
    
    try {
        const result = await pool.query('DELETE FROM characters WHERE id = $1', [characterId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Character not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting character:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }   
}

export default { getAllCharacters, getCharacterById, addCharacter, deleteCharacter };