import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = process.env.LASTFM_USERNAME;

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    console.log("Fetching Last.fm data...");
    const [trackResponse, infoResponse] = await Promise.all([
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`,
      ),
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${USERNAME}&api_key=${API_KEY}&format=json`,
      ),
    ]);

    if (!trackResponse.ok || !infoResponse.ok) {
      console.error("Track Response Status:", trackResponse.status);
      console.error("Info Response Status:", infoResponse.status);
      throw new Error("Failed to fetch data from Last.fm API");
    }

    const trackData = await trackResponse.json();
    const infoData = await infoResponse.json();

    const track = trackData.recenttracks?.track?.[0];

    if (!track) {
      console.error("No recent tracks found");
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "No recent tracks found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        trackInfo: {
          name: track.name,
          artist: track.artist["#text"],
          album: track.album["#text"],
          albumArt: track.image[3]["#text"], // Large size image
          nowPlaying: track["@attr"] && track["@attr"].nowplaying === "true",
        },
        totalScrobbles: infoData.user.playcount,
        username: USERNAME,
      }),
    };
  } catch (error) {
    console.error("Error fetching Last.fm data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Last.fm data" }),
    };
  }
};
