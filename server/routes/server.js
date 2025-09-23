import express from 'express';
import charactersRouter from './routes/characters.js'

const app = express();

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./scripts'))

app.use('/gifts', )