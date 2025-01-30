import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong'
import { CirclePlus, Pause, CirclePlay, SkipBack, SkipForward } from 'lucide-react'
import { AiFillPlusCircle } from "react-icons/ai";
import { useTogglePlayPause } from '../hooks/useTogglePlayPause'
import { Maximize2, Volume2 } from 'lucide-react'
import formatSecondsToMinutesSeconds from '../utils/formatSecondsToMinutesSeconds'
import { useSkipControls } from '../hooks/useSkipControls'
import { FullScreen } from '../store/atoms/FullScreen'
import { likeState } from '../store/atoms/likeState'
import { useHandleCreateInteraction } from '../hooks/useHandleCreateInteraction'
import { useHandleRemoveInteraction } from '../hooks/useHandleRemoveInteraction';

export default function PlaybackControls({ handlePlay, handlePause, handleSeek, handleVolumeChange, currentTime }) {
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const togglePlayPause = useTogglePlayPause();
    const { handleSkip } = useSkipControls();
    const setIsFullScreen = useSetRecoilState(FullScreen);
    const liked = useRecoilValue(likeState);
    const { createInteraction } = useHandleCreateInteraction();
    const { removeInteraction } = useHandleRemoveInteraction();
    
    return (
        <>
            <div className='relative'>
                <div className='absolute bottom-0 w-full bg-[#0f1214] h-24 flex justify-between px-5 sm:px-10 lg:px-5 py-5'>
                    <div className='flex gap-3'>
                        <img src={currentPlaying.song.imageUrl} alt="cover image" className="w-14 h-14 rounded-md flex-shrink-0" />
                        <div className='flex flex-col gap-1 min-w-0 py-1'>
                            <div className='font-semibold truncate'>{currentPlaying.song.songTitle}</div>
                            <div className='text-[0.78rem] text-primary-text truncate'>{currentPlaying.song.artistName}</div>
                        </div>
                    </div>
                    <div className='lg:flex gap-3 py-5 hidden'>
                        <SkipBack 
                            className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1} 
                            onClick={()=>handleSkip('backward')}
                        />
                        {currentPlaying.isPlaying
                            ?
                            <Pause
                                className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1}
                                onClick={() => {
                                    handlePause();
                                    togglePlayPause(currentPlaying.song)
                                }}
                            />
                            :
                            <CirclePlay
                                className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1}
                                size={24}
                                onClick={() => {
                                    handlePlay();
                                    togglePlayPause(currentPlaying.song)
                                }}
                            />
                        }
                        <SkipForward 
                            className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1} 
                            onClick={()=>handleSkip('forward')}
                        />
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
                    <div className=' flex gap-3 sm:gap-4 py-5'>
                        <div className='flex gap-2 lg:hidden sm:px-8'>
                            <SkipBack 
                                className='hover:text-primary-text hidden md:block hover:cursor-pointer' strokeWidth={1} 
                                onClick={()=>handleSkip('backward')}
                            />
                            {currentPlaying.isPlaying
                                ?
                                <Pause
                                    className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1}
                                    onClick={() => {
                                        handlePause();
                                        togglePlayPause(currentPlaying.song)
                                    }}
                                />
                                :
                                <CirclePlay
                                    className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1}
                                    size={24}
                                    onClick={() => {
                                        handlePlay();
                                        togglePlayPause(currentPlaying.song)
                                    }}
                                />
                            }
                            <SkipForward 
                                className='hover:text-primary-text hidden md:block hover:cursor-pointer' strokeWidth={1} 
                                onClick={()=>handleSkip('forward')}
                            />
                        </div>
                        {liked.includes(currentPlaying.song._id) 
                        ?
                        <AiFillPlusCircle 
                            onClick={()=>removeInteraction(currentPlaying.song._id)}
                            className='hidden sm:block text-primary-text hover:cursor-pointer' strokeWidth={1} 
                            size={24}
                        />
                        :
                        <CirclePlus 
                           onClick={()=>createInteraction(currentPlaying.song._id)}
                            className='hidden sm:block hover:text-primary-text hover:cursor-pointer' strokeWidth={1} 
                        />
                        }
                        <div className='hidden md:flex gap-1.5 hover:text-primary-text'>
                            <Volume2
                                strokeWidth={1}
                                className='hover:text-primary-text'
                            />
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    defaultValue="1"
                                    step="0.1"
                                    onChange={handleVolumeChange}
                                    className="w-24 h-1 bg-transparent accent-primary-text rounded-full transform -translate-y-1.5 hover:cursor-pointer"
                                />
                            </div>
                        </div>
                        <Maximize2 
                            className='hover:text-primary-text hover:cursor-pointer' 
                            strokeWidth={1} 
                            onClick={()=>{
                                setIsFullScreen(true)
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
