import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import giftData from '../data/gifts.js'

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(giftData);
})

router.get ('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirName, '../public/gift.html'));
})

export default router;