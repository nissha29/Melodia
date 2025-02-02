import React, { useEffect } from 'react';
import { Play, Pause, CirclePlay, Music2 } from 'lucide-react'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong.js'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useTogglePlayPause } from '../hooks/useTogglePlayPause.js'
import { useHandleAudio } from '../hooks/useHandleAudio.js'
import { FullScreen } from '../store/atoms/FullScreen.js';
import formatSecondsToMinutesSeconds from '../utils/formatSecondsToMinutesSeconds.js';
import { likedSongsState } from '../store/atoms/likedSongsState.js';
import { useFetchLikedSongs } from '../hooks/useFetchLikedSongs.js';

export default function LikedSongs() {
    const togglePlayPause = useTogglePlayPause();
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const { handlePlay, handlePause } = useHandleAudio();
    const setIsFullScreen = useSetRecoilState(FullScreen);
    const likedSongs = useRecoilValue(likedSongsState);
    const { fetchLikedSongs } = useFetchLikedSongs();

    useEffect(() => {
        fetchLikedSongs();
        const songs = setInterval(() => {
            fetchLikedSongs();
        }, 2000);
        return () => clearInterval(songs);
    }, []);

    return (
        <div className="bg-primary-bg text-white sm:px-7 px-3 overflow-y-scroll scrollbar-none">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
                <div className="w-60 h-60 sm:w-52 sm:h-52 md:w-60 md:h-60 bg-gradient-to-br from-purple-400 to-cyan-200 rounded-lg flex items-center justify-center">
                    <div className="text-white">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium mb-3">Playlist</p>
                    <h1 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-[3.6rem] text-4xl font-bold mb-4">Liked Songs</h1>
                    <p className="text-sm text-gray-300">You have {likedSongs.length} liked songs</p>
                </div>
            </div>

            <div>
                <div className="w-full">
                    <div className='text-2xl mb-5'>Songs liked by you</div>
                    {likedSongs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center min-h-[400px] overflow-y-scroll scrollbar-none">
                            <div className="animate-bounce">
                                <Music2
                                    size={64}
                                    className="text-gray-400 mb-4"
                                />
                            </div>

                            <h2 className="text-primary-text sm:text-3xl text-xl font-semibold mb-2">
                                No Liked Songs Yet
                            </h2>

                            <p className="text-gray-500 text-center max-w-md mb-6 hidden sm:block">
                                Start exploring and like some songs to build your collection
                            </p>
                        </div>
                    ) : (
                        <div className="pb-28 space-y-1 w-full h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
                            {likedSongs.map((song) => (
                                <div key={song._id} className="w-full hover:cursor-pointer">
                                    <div className="flex items-center gap-3 p-2 sm:p-3 hover:bg-[#9970952f] rounded-lg transition-colors">
                                        <img
                                            src={song.imageUrl}
                                            alt="Cover image"
                                            className="w-10 h-10 rounded-md flex-shrink-0"
                                            onClick={
                                                () => {
                                                    togglePlayPause(song)
                                                    setIsFullScreen(true)
                                                }
                                            }
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold truncate sm:max-w-60 max-w-40">{song.songTitle}</div>
                                            <div className="text-sm text-primary-text truncate sm:max-w-80 max-w-40 pb-1">{song.artistName}</div>
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
                    )}
                </div>
            </div>
        </div>
    )
}
