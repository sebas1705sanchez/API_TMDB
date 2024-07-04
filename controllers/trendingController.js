import TMDB_API from "../api/TMDB_API";

export const getTrending = async (req, res) => {
    const time_window = req.query.time_window;

    const response = await TMDB_API.get(`/trending/all/${time_window}`);
};