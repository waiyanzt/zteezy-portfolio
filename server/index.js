import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import twitterRoutes from "./twitterRoutes.js";
import lastfmRoutes from "./lastfmRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/twitter", twitterRoutes);
app.use("/api/lastfm", lastfmRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    console.error("Server failed to start:", err);
  });
