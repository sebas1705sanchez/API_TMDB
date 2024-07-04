import express from "express";
import movieRouter from "./routes/movie.js";
import tvRouter from "./routes/tv.js";
import peopleRouter from "./routes/people.js";
import trendingRouter from "./routes/trending.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api", movieRouter);
app.use("/api", tvRouter);
app.use("/api", peopleRouter);
app.use("/api", trendingRouter);

app.listen(PORT, () => {
  console.clear();
  console.log("Servidor iniciado");
});