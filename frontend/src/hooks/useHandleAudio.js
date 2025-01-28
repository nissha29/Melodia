import { useRef, useState, useEffect } from 'react';
import { currentPlayingSong } from '../store/atoms/currentPlayingSong';
import { useRecoilValue } from 'recoil';

export function useHandleAudio() {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);  
    const [duration, setDuration] = useState(0);
    const currentPlaying = useRecoilValue(currentPlayingSong);

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
    };
}