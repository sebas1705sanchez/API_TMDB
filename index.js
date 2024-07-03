import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const app = express();

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

app.use(express.json());
app.use(express.text());


app.get("/tmdb/:page:language", async (req, res) => {
    const { page, language } = req.params;

    const response = await tmdbApi.get('/movie/popular', {
      params: {
        language: language,
        page: page,
      },
    });

    res.send(response.data);
});



app.listen(PORT, () => {
    console.clear();
    console.log("Servidor iniciado");
})