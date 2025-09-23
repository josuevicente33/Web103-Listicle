import express from 'express';
import charactersRouter from './routes/characters.js'

const app = express();

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./scripts'))

app.use('/characters', characterRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;"> Marverl Rivals Characters </h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})
