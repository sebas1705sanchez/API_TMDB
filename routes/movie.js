import express from "express";

const movieRouter = express.Router();

movieRouter.get("/api/movies", async (req, res) => {
  const page = req.query.page;
  const language = req.query.language;
  const genres = req.query.genres;
  const query = req.query.query;
  const region = req.query.region;

  const response = await TMDB_API.get("/search/movie", {
    params: {
      page: page,
      language: language,
      query: query,
      regin: region,
    },
  });

  //filtrar la respuesta por el genero del id (genre_ids)
  const dataFilter = response.data.results.filter((movie) => {
    return movie.genre_ids.includes(parseInt(genres));
  });

  return res.send(dataFilter);
});

movieRouter.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/movie/${id}`, {
      params: {
        language: language,
      },
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
});

export default movieRouter;