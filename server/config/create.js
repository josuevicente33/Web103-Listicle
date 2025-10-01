import pool from './database.js';
import dotenv from './dotenv.js';
import characterData from '../data/characters.js'

const createCharacterTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS characters;

    CREATE TABLE IF NOT EXISTS characters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        slug VARCHAR(100) UNIQUE NOT NULL,
        alias VARCHAR(100),
        role VARCHAR(50),
        affiliations TEXT[],
        image TEXT,
        description TEXT,
        infoUrl TEXT
    )
    `
    try {
        const res = await pool.query(createTableQuery);
        console.log("Character table created:", res);
    } catch (error) {
        console.error("Error creating character table:", error);
    }
};

const insertCharacterData = async () => {
    await createCharacterTable();

    characterData.forEach((character) => {
        const insertQuery = `
        INSERT INTO characters (name, slug, alias, role, affiliations, image, description, infoUrl)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (slug) DO NOTHING;
        `;
        const values = [
            character.name,
            character.slug,
            character.alias,
            character.role,
            character.affiliations,
            character.image,
            character.description,
            character.infoUrl
        ];

        try {
            pool.query(insertQuery, values, (err, res) => {
                if (err) {
                    console.error("Error inserting character:", err);
                    return;
                }
                console.log(`Character with ID ${character.id} inserted or already exists.`);
            });
        } catch (error) {
            console.error("Error inserting character:", error);
        }
    });
};

insertCharacterData();