import React, { useState } from 'react';
import { Home, Library, Menu, X, Music, CirclePlay, SkipBack, SkipForward, Pause } from 'lucide-react';
import { currentPlayingSong } from '../store/atoms/currentPlayingSong';
import { useRecoilValue } from 'recoil';
import { useSkipControls } from '../hooks/useSkipControls';
import { useHandleAudio } from '../hooks/useHandleAudio';
import { useTogglePlayPause } from '../hooks/useTogglePlayPause';
import { useNavigate } from 'react-router-dom';

function HomeSidebar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const currentPlaying = useRecoilValue(currentPlayingSong);
    const { handleSkip } = useSkipControls();
    const { handlePause, handlePlay} = useHandleAudio();
    const togglePlayPause = useTogglePlayPause();

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className='flex h-full relative font-playwrite bg-[#0f1214]'>
            <div className={`
                px-3 sm:px-6 py-9 cursor-pointer z-50
                absolute
                lg:block
            `}>
                {isOpen ? 
                    <X onClick={handleToggle} className='text-white'/> : 
                    <Menu onClick={handleToggle} className='text-white sm:size-7 size-6'/>
                }
            </div>

            <div className={`
                ${isOpen ? 'w-64' : 'w-0'}
                transition-all duration-300 
                overflow-hidden 
                bg-[#0f1214]
                absolute
                h-full z-10
                border border-gray-800
            `}>
                <div className={`
                    p-6 pt-24 flex flex-col gap-6 
                    ${isOpen ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-300
                `}>
                    <div className="flex items-center gap-2" onClick={() => navigate('/home')}>
                        <Home size={24} className='text-white'/>
                        <span className='text-primary-text cursor-pointer'>Home</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Library size={24} className='text-white'/>
                            <span className='text-primary-text cursor-pointer' onClick={() => navigate('/home/liked')}>Liked songs</span>
                        </div>
                        <div className="pl-8 space-y-2 text-[#997095] flex flex-col gap-2">
                            <div className='cursor-pointer' onClick={() => navigate('/home/discover')}>Discover</div>
                            <div className='cursor-pointer' onClick={() => navigate('/home/genre')}>Genre</div>
                        </div>
                    </div>
                </div>
                <div className={`
                    p-6 flex flex-col gap-6 
                    ${isOpen ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-300 text-white
                `}>
                    <div className='pl-2 flex gap-3'>
                        <Music className='text-primary-text animate-spin' size={28}/>
                        <div>Recently Playing</div>
                    </div>
                    <div className='flex flex-col gap-1 justify-center items-center'>
                        <img src={currentPlaying.song.imageUrl} alt="Cover Image" className='w-52 h-52' />
                        <div>{currentPlaying.song.songTitle}</div>
                        <div className='text-primary-text text-sm'>{currentPlaying.song.artistName}</div>
                        <div className='pt-3 flex gap-2 sm:px-8'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSidebar;