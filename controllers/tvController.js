import TMDB_API from "../api/TMDB_API.js";

export const getTV = async (req, res) => {
  const page = req.query.page;
  const language = req.query.language;
  const genres = req.query.genres;
  const query = req.query.query;
  const region = req.query.region;

  // console.log(query);

  const response = await TMDB_API.get("/search/tv", {
    params: {
      page: page,
      language: language,
      query: query,
      region: region,
    },
  });

  //filtrar la respuesta por el genero del id (genre_ids)
  const dataFilter = response.data.results.filter((tv) => {
    return tv.genre_ids.includes(parseInt(genres));
  });

  return res.send(dataFilter);
};

export const getTVById = async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/tv/${id}`, {
      params: {
        language: language,
      },
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
};
