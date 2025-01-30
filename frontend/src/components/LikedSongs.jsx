import React, { useEffect, useState } from 'react';
import { Play, Pause, CirclePlay, Music2 } from 'lucide-react'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong.js'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useTogglePlayPause } from '../hooks/useTogglePlayPause.js'
import { useHandleAudio } from '../hooks/useHandleAudio.js'
import URL from '../../constants.js'
import { FullScreen } from '../store/atoms/FullScreen.js';
import formatSecondsToMinutesSeconds from '../utils/formatSecondsToMinutesSeconds.js';
import axios from 'axios';

export default function LikedSongs() {
    const togglePlayPause = useTogglePlayPause();
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const { handlePlay, handlePause } = useHandleAudio()
    const setIsFullScreen = useSetRecoilState(FullScreen);
    const [likedSongs, setLikedSongs] = useState([]);

    async function fetchLikedSongs(){
        try{
            const response = await axios.get(
                `${URL}/api/interaction/likes`,
                {
                    withCredentials: true,
                }
            );
            setLikedSongs(response.data.tracks);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLikedSongs();
        const songs = setInterval(() => {
            fetchLikedSongs();
        }, 500000);
        return () => clearInterval(songs);
    }, []);

    return (
        <div className="bg-primary-bg text-white p-8">
            {/* Header */}
            <div className="flex items-end gap-6 mb-8">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-cyan-200 rounded-lg flex items-center justify-center">
                    <div className="text-white">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium mb-2">Playlist</p>
                    <h1 className="text-8xl font-bold mb-4">Liked Songs</h1>
                    <p className="text-sm text-gray-300">You have {likedSongs.length} liked songs</p>
                </div>
            </div>

            {/* Play Button */}
            <div className="mb-6">
                <button className="bg-secondary-bg rounded-full p-3 hover:bg-[#6b4c68f5]">
                    <Play size={24} fill="white" className="text-white" />
                </button>
            </div>

            <div>
                <div className="w-full">
                    <div className='text-2xl mb-5'>Songs liked by you</div>
                    <div className="pb-8 space-y-1 w-full h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
                        {likedSongs.map((song) => (
                            <div key={song.id} className="w-full hover:cursor-pointer" onClick={() => setIsFullScreen(true)}>
                                <div className="flex items-center gap-3 p-2 sm:p-3 hover:bg-[#9970952f] rounded-lg transition-colors">
                                    <img
                                        src={song.imageUrl}
                                        alt="Cover image"
                                        className="w-10 h-10 rounded-md flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-semibold truncate">{song.songTitle}</div>
                                        <div className="text-sm text-primary-text truncate pb-1">{song.artistName}</div>
                                    </div>
            
                                    <div className='flex items-center xl:gap-16 gap-8 flex-shrink-0'> 
                                        <div className='hidden md:flex items-center gap-2 truncate max-w-[100px]'>
                                            <Music2 className='text-[#812e79] shrink-0' size={16} />
                                            <div className='text-sm text-gray-400 truncate'>{song.genre}</div>
                                        </div>

                                        <div className='flex items-center gap-8'> 
                                            {currentPlaying.isPlaying && currentPlaying.song._id === song._id ? (
                                                <div className='flex items-center' title='Pause'>
                                                    <Pause
                                                        className='text-primary-text hover:cursor-pointer'
                                                        strokeWidth={1}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handlePause();
                                                            togglePlayPause(song);
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='flex items-center' title='Play'>
                                                    <CirclePlay
                                                        className='text-primary-text hover:cursor-pointer'
                                                        strokeWidth={1}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handlePlay();
                                                            togglePlayPause(song);
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            <div className='text-gray-500 text-[0.75rem] w-12 text-right'>
                                                {formatSecondsToMinutesSeconds(song.duration)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='opacity-5' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
