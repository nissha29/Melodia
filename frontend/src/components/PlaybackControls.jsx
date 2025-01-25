import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong'
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { useTogglePlayPause } from '../hooks/togglePlayPause'
import { Heart, Maximize2, Volume2 } from 'lucide-react'

export default function PlaybackControls() {
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const togglePlayPause = useTogglePlayPause();

    console.log(currentPlaying);

    return (
        <>
            <div className='relative'>
                <div className='absolute bottom-0 w-full bg-[#0f1214] h-24 flex justify-between px-20 py-4'>
                    <div className='flex gap-3'>
                        <img src={currentPlaying.song.imageUrl} alt="cover image" className="w-14 h-14 rounded-md flex-shrink-0" />
                        <div className='flex flex-col gap-1 min-w-0 py-1'>
                            <div className='font-semibold truncate'>{currentPlaying.song.songTitle}</div>
                            <div className='text-[0.78rem] text-primary-text truncate'>{currentPlaying.song.artistName}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 py-5'>
                        <SkipBack className='hover:text-primary-text' />
                        {currentPlaying.isPlaying
                            ?
                            <Pause 
                                className='hover:text-primary-text'
                                onClick={()=>togglePlayPause(currentPlaying.song)}
                            />
                            :
                            <Play     
                                className='hover:text-primary-text'
                                onClick={()=>togglePlayPause(currentPlaying.song)}
                            />
                        }
                        <SkipForward className='hover:text-primary-text' />
                    </div>
                    <div className='py-5'>
                        <input type="range" className='w-full px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-80'/>
                    </div>
                    <div className=' flex gap-20 py-5'>
                        <Heart/>
                        <div className='flex gap-3'>
                            <Volume2/>
                            <input type="range" />
                        </div>
                        <Maximize2/>
                    </div>
                </div>
            </div>
        </>
    )
}
