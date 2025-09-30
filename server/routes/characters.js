import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import characterCotroller from '../controllers/characters.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const router = express.Router();

router.get('/', characterCotroller.getAllCharacters);

router.get('/:characterId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirName, '../public/character.html'));
})

router.post('/', characterCotroller.addCharacter);

router.delete('/:characterId', characterCotroller.deleteCharacter);

export default router;