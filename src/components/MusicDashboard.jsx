import React, { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;

const MusicDashboard = () => {
  const [trackInfo, setTrackInfo] = useState(null);
  const [totalScrobbles, setTotalScrobbles] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trackResponse, infoResponse] = await Promise.all([
          fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
          ),
          fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${USERNAME}&api_key=${API_KEY}&format=json`
          ),
        ]);

        const trackData = await trackResponse.json();
        const infoData = await infoResponse.json();

        const track = trackData.recenttracks.track[0];
        setTrackInfo({
          name: track.name,
          artist: track.artist["#text"],
          album: track.album["#text"],
          albumArt: track.image[3]["#text"], // Large size image
          nowPlaying: track["@attr"] && track["@attr"].nowplaying === "true",
        });

        setTotalScrobbles(infoData.user.playcount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (!trackInfo) return null;

  return (
    <div className="p-4 hover:bg-opacity-10 hover:bg-white transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={trackInfo.albumArt}
            alt={`${trackInfo.album} cover`}
            className="w-24 h-24 mr-4 rounded-md shadow-lg"
          />
          <div>
            <p className="font-bold text-base mb-2 text-[#b4f9f8]">
              {trackInfo.nowPlaying
                ? "ZTZ is currently blasting"
                : "ZTZ last listened to"}
            </p>
            <p className="font-bold text-lg">{trackInfo.name}</p>
            <p className="text-base text-[#c0caf5]">{trackInfo.artist}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#c53b53] text-2xl font-bold">{totalScrobbles}</p>
          <p className="text-[#ff757f] text-xl font-semibold">Songs Listened</p>
        </div>
      </div>
    </div>
  );
};

export default MusicDashboard;
