import express, { response } from 'express'
import dotenv from 'dotenv'
import axios from 'axios' 

dotenv.config();

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const app = express();

const TMDB_API = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

app.use(express.json());
app.use(express.text());

app.get("/tmdb", async (req, res) => {
    const { page, language } = req.query;

    const response = await TMDB_API.get('/movie/popular', {
      params: {
        page: page,
        language: language,
      },
    });

    return res.send(response.data);
});

app.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/movie/${id}`, {
      params: {
        language: language
      }
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
})

app.get("/api/tv/:id", async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/tv/${id}`, {
      params: {
        language: language
      }
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
})

app.get("/api/people/:id", async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/person/${id}`, {
      params: {
        language: language
      }
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
})

app.listen(PORT, () => {
    console.clear();
    console.log("Servidor iniciado");
})