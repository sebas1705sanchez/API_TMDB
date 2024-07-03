import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.text());

const app = express();

app.get("/tmdb/:page", (req, res) => {
    const page = req.params;

    const url = axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {});
    const response = url.response();
});
app.

app.listen(PORT, () => {
    console.clear();
    console.log("Servidor iniciado");
})