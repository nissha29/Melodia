import { currentPlayingSong } from "../store/atoms/currentPlayingSong";
import { useRecoilState, useRecoilValue } from "recoil";
import { songsAtom } from "../store/atoms/Songs";
import { likedSongsState } from "../store/atoms/likedSongsState";

export function useSkipControls(sourceType){
    const [currentPlaying, setCurrentPlaying] = useRecoilState(currentPlayingSong);
    const allTracks = useRecoilValue(songsAtom);
    const likedTracks = useRecoilValue(likedSongsState);

    const getSongsArray = () => {
        switch(sourceType){
            case 'home' :
                return allTracks;
            case 'liked' :
                return likedTracks;
            default :
                return allTracks;
        }
    }

    const songs = getSongsArray();

    function handleSkip(direction){
        const currentIndex = songs.findIndex((song) => {
            return song._id === currentPlaying.song._id;
        })
    
        let nextIndex;
        if(direction === 'backward'){
            nextIndex = currentIndex - 1 < 0 ? songs.length - 1 : currentIndex - 1;
        }else{
            nextIndex = currentIndex + 1 >= songs.length ? 0 : currentIndex + 1;
        }
    
        const nextSong = songs[nextIndex];
        if (nextSong) {
            setCurrentPlaying({
                song: nextSong,
                isPlaying: true
            });
        }   
    }
    return { handleSkip };
}