import { useRecoilState } from "recoil";
import { currentPlayingSong } from "../store/atoms/currentPlayingSong";

export function useTogglePlayPause() {
  const [currentPlaying, setCurrentPlaying] = useRecoilState(currentPlayingSong);

  const togglePlayPause = (song) => {
    if (!currentPlaying || currentPlaying.song?._id !== song._id) {
      setCurrentPlaying({
        song: song,
        isPlaying: true
      });
    } 
    else {
      setCurrentPlaying(prev => ({
        ...prev,
        isPlaying: !prev.isPlaying
      }));
    }
  };

  return togglePlayPause;
}