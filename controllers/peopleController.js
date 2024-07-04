import TMDB_API from "../api/TMDB_API.js";

export const getPeople = async (req, res) => {
  const query = req.query.query;
  const language = req.query.language;
  const page = req.query.page;

  try {
    const response = await TMDB_API.get("/search/person", {
      params: {
        query: query,
        language: language,
        page: page,
      },
    });
    return res.send(response.data.results);
  } catch (error) {
    return res.status(404).send();
  }
};

export const getPeopleById = async (req, res) => {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await TMDB_API.get(`/person/${id}`, {
      params: {
        language: language,
      },
    });

    return res.send(response.data);
  } catch (error) {
    return res.status(404).send();
  }
};
