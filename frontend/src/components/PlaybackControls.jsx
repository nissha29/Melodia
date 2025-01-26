import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { useTogglePlayPause } from '../hooks/togglePlayPause'
import { Heart, Maximize2, Volume2, EllipsisVertical } from 'lucide-react'
import formatSecondsToMinutesSeconds from '../utils/formatSecondsToMinutesSeconds'
import { useHandleAudio } from '../hooks/handleAudio'

export default function PlaybackControls() {
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const togglePlayPause = useTogglePlayPause();
    const { audioRef, currentTime, handlePlay, handlePause, handleTimeUpdate, handleSeek, handleLoadedMetadata, handleVolumeChange } = useHandleAudio();

    return (
        <>
            <div className='relative'>
                <audio
                    ref={audioRef}
                    src={currentPlaying.song.trackUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
                <div className='absolute bottom-0 w-full bg-[#0f1214] h-24 flex justify-between px-5 sm:px-10 lg:px-5 py-5'>
                    <div className='flex gap-3'>
                        <img src={currentPlaying.song.imageUrl} alt="cover image" className="w-14 h-14 rounded-md flex-shrink-0" />
                        <div className='flex flex-col gap-1 min-w-0 py-1'>
                            <div className='font-semibold truncate'>{currentPlaying.song.songTitle}</div>
                            <div className='text-[0.78rem] text-primary-text truncate'>{currentPlaying.song.artistName}</div>
                        </div>
                    </div>
                    <div className='lg:flex gap-3 py-5 hidden'>
                        <SkipBack className='hover:text-primary-text' strokeWidth={1} />
                        {currentPlaying.isPlaying
                            ?
                            <Pause
                                className='hover:text-primary-text' strokeWidth={1}
                                onClick={() => {
                                    handlePause();
                                    togglePlayPause(currentPlaying.song)
                                }}
                            />
                            :
                            <Play
                                className='hover:text-primary-text' strokeWidth={1}
                                onClick={() => {
                                    handlePlay();
                                    togglePlayPause(currentPlaying.song)
                                }}
                            />
                        }
                        <SkipForward className='hover:text-primary-text' strokeWidth={1} />
                    </div>
                    <div className='hidden lg:flex py-8 items-center'>
                        <div className='text-[0.65rem] font-thin font-playwrite pr-2 mt-1'>{formatSecondsToMinutesSeconds(currentTime)}</div>
                        <input
                            type="range"
                            min={0}
                            max={currentPlaying.song.duration}
                            value={currentTime}
                            onChange={(e) => handleSeek(Number(e.target.value))}
                            className="
                                w-full md:w-24 lg:w-96 xl:w-[38rem] 2xl:w-[50rem]
                                h-1
                                opacity-100
                                bg-transparent
                                rounded-full
                                accent-primary-text
                                cursor-pointer
                                focus:outline-none
                            "
                        />
                        <div className='text-[0.65rem] font-thin font-playwrite pl-2 mt-1'>{formatSecondsToMinutesSeconds(currentPlaying.song.duration)}</div>
                    </div>
                    <div className=' flex gap-2 sm:gap-4 py-5'>
                        <div className='flex gap-2 lg:hidden sm:px-8'>
                            <SkipBack className='hover:text-primary-text hidden md:block' strokeWidth={1} />
                            {currentPlaying.isPlaying
                                ?
                                <Pause
                                    className='hover:text-primary-text' strokeWidth={1}
                                    onClick={() => {
                                        handlePause();
                                        togglePlayPause(currentPlaying.song)
                                    }}
                                />
                                :
                                <Play
                                    className='hover:text-primary-text' strokeWidth={1}
                                    onClick={() => {
                                        handlePlay();
                                        togglePlayPause(currentPlaying.song)
                                    }}
                                />
                            }
                            <SkipForward className='hover:text-primary-text hidden md:block' strokeWidth={1} />
                        </div>
                        <EllipsisVertical className='block md:hidden hover:text-primary-text' strokeWidth={1} />
                        <Heart className='hidden md:block hover:text-primary-text' strokeWidth={1} />
                        <div className='hidden md:flex gap-1.5 hover:cursor-pointer hover:text-primary-text'>
                            <Volume2
                                strokeWidth={1}
                                className='hover:text-primary-text hover:cursor-pointer'
                            />
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    defaultValue="1"
                                    step="0.1"
                                    onChange={handleVolumeChange}
                                    className="w-24 h-1 bg-transparent accent-primary-text rounded-full transform -translate-y-1.5"
                                />
                            </div>
                        </div>
                        <Maximize2 className='hidden md:block hover:text-primary-text hover:cursor-pointer' strokeWidth={1} />
                    </div>
                </div>
            </div>
        </>
    )
}
