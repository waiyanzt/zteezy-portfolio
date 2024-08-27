import { useState, useEffect } from "react";

const MusicDashboard = () => {
  const [trackInfo, setTrackInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/lastfm/music-data");
        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }
        const data = await response.json();
        setTrackInfo(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load music data. Please try again later.");
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!trackInfo) return <div>Loading...</div>;

  return (
    <a
      href={`https://www.last.fm/user/${trackInfo.username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4  hover:bg-[#24263b] transition-colors duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={trackInfo.trackInfo.albumArt}
            alt={`${trackInfo.trackInfo.album} cover`}
            className="w-24 h-24 mr-4 rounded-md shadow-lg"
          />
          <div>
            <p className="font-bold text-base mb-2 text-[#b4f9f8]">
              {trackInfo.trackInfo.nowPlaying
                ? "ZTZ is currently blasting"
                : "ZTZ last listened to"}
            </p>
            <p className="font-bold text-lg">{trackInfo.trackInfo.name}</p>
            <p className="text-base text-[#c0caf5]">
              {trackInfo.trackInfo.artist}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#3d59a1] text-2xl font-bold">
            {trackInfo.totalScrobbles}
          </p>
          <p className="text-[##7aa2f7] text-xl font-semibold">
            Songs Listened
          </p>
        </div>
      </div>
    </a>
  );
};

export default MusicDashboard;
