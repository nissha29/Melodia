import { useRef, useState, useEffect } from 'react';
import { currentPlayingSong } from '../store/atoms/currentPlayingSong';
import { useRecoilState, useRecoilValue } from 'recoil';
import { songsAtom } from '../store/atoms/Songs';
import { likedSongsState } from '../store/atoms/likedSongsState';
import { myTracksState } from '../store/atoms/myTracksState';

export function useHandleAudio(sourceType) {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);  
    const [duration, setDuration] = useState(0);
    const [currentPlaying,setCurrentPlaying] = useRecoilState(currentPlayingSong);
    const allTracks = useRecoilValue(songsAtom);
    const likedTracks = useRecoilValue(likedSongsState);
    const myTracks = useRecoilValue(myTracksState);

    const getSongsArray = () => {
        switch(sourceType){
            case 'home' :
                return allTracks;
            case 'liked' :
                return likedTracks;
            case 'my-tracks' :
                return myTracks;
            default :
                return allTracks;
        }
    }


    useEffect(() => {
        if (audioRef.current) {
            if (audioRef.current.src !== currentPlaying.song.trackUrl) {
                audioRef.current.src = currentPlaying.song.trackUrl;
            }

            if (currentPlaying.isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentPlaying]);

    const handleEnded = () => {
        const songs = getSongsArray();
        const currentIndex = songs.findIndex((song) => song._id === currentPlaying.song._id);
        const nextIndex = currentIndex + 1 >= songs.length ? 0 : currentIndex + 1;
        const nextSong = songs[nextIndex];
        
        if (nextSong) {
            setCurrentPlaying({
                song: nextSong,
                isPlaying: true
            });
        }
    };

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleSeek = (time) => {
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
    };

    const handleVolumeChange = (e) => {
        if(audioRef.current) {
            audioRef.current.volume = e.target.value;
        }
    }

    return {
        audioRef,
        currentTime,
        handlePlay,
        handlePause,
        handleTimeUpdate,
        handleSeek,
        handleLoadedMetadata,
        handleVolumeChange,
        handleEnded,
    };
}