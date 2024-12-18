import { useState, useEffect } from "react";
import { IoPauseOutline } from "react-icons/io5";

const Track = () => {
  const [tracks, setTracks] = useState([]);
  const trackInfo = async () => {
    try {
      const response = await fetch("../../track.json");
      const data = await response.json();
      setTracks(data);

    } catch (error) {
      console.error("Error fetching track data:", error);
    }
  };

  useEffect(() => {
    trackInfo()
  }, [])

  return (
    <div className="music_bar w-[60%] h-auto space-y-7 flex flex-col max-h-[450px] overflow-y-scroll">
      {tracks.map((track, index) => (
        <div
          key={index}
          className="w-[580px] h-[70px] rounded-md bg-primary-indigo-light flex items-center space-x-4 p-2"
        >

          <IoPauseOutline className="text-white text-xl" />
          <div className="w-[52px] h-[52px]">
            <img src={track.imageurl} alt="" className="music_track" />
          </div>
          <div className="flex flex-col">
            <h3 className="base_heading text-white ">{track.trackname}</h3>
            <h5 className="text-white text-sm font-CabinCondensed">{track.artist}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Track;
