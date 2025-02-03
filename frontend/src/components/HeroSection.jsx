import React, { useRef, useState } from 'react'
import JC from '../assets/JC.png'
import us_Mod_Se_Shuru_karen from '../assets/us-mod-se-shuru-karen.mp3'
import { useNavigate } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className='flex justify-center font-playwrite mt-24 px-4 sm:px-6 md:px-8'>
      <div className='flex flex-col justify-center items-center w-full'>
        {/* Heading Section */}
        <div className='text-white text-left text-4xl sm:text-6xl md:text-7xl xl:text-8xl sm:text-center font-thin'>
          Experience Music
        </div>
        <div className='text-primary-text text-2xl sm:text-5xl md:text-5xl xl:text-7xl mt-7 sm:mt-14 text-center font-thin'>
          Like Never Before
        </div>
        <div className='text-sm sm:text-lg lg:text-xl text-gray-400 mt-3 md:mt-5 font-thin text-center'>
          Add your favorite tracks to the list
        </div>

        {/* Player Section */}
        <div className='w-full max-w-[70rem] mt-8 md:mt-14 px-3 md:px-6'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8'>
            {/* Album Art */}
            <img 
              src={JC} 
              alt="Jagjit and Chitra" 
              className='w-48 sm:w-48 md:w-60 h-40 sm:h-44 md:h-52 rounded-2xl sm:rounded-3xl object-cover'
            />

            {/* Player Controls */}
            <div className='flex flex-col gap-2 items-center sm:items-start w-full sm:w-auto'>
              <div className='text-lg sm:text-lg md:text-xl text-white text-center sm:text-left'>
                Us Mod Se Shuroo Karen
              </div>
              <div className='text-primary-text text-center sm:text-left text-[0.75rem] text-sm'>
                Jagjit Singh, Chitra Singh
              </div>

              {/* Audio Controls */}
              <div className='flex items-center gap-2 w-full max-w-md sm:max-w-none'>
                <audio 
                  ref={audioRef}
                  src={us_Mod_Se_Shuru_karen}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />
                <div className='text-[0.7rem] mt-8 text-gray-400'>
                  {formatTime(currentTime)}
                </div>
                <input
                  type="range"
                  min={0}
                  max={duration}
                  value={currentTime}
                  onChange={(e) => handleSeek(Number(e.target.value))}
                  className="
                    w-full sm:w-64 md:w-80 lg:w-[30rem] xl:w-[32rem]
                    mt-8
                    h-1
                    opacity-100
                    bg-transparent
                    rounded-full
                    accent-primary-text
                    cursor-pointer
                    focus:outline-none
                  "
                />
                <div className='text-[0.7rem] mt-8 text-gray-400'>
                  {formatTime(duration)}
                </div>
              </div>

              {/* Play/Pause Button */}
              <div className='mt-2 sm:mt-4'>
                {isPlaying ? (
                  <Pause 
                    onClick={handlePause} 
                    className='text-white hover:cursor-pointer' 
                    fill='white' 
                    size={28} 
                    sm:size={32}
                  />
                ) : (
                  <Play 
                    onClick={handlePlay} 
                    className='text-white hover:cursor-pointer' 
                    fill='white' 
                    size={28}
                    sm:size={32}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/signin')}
          className='bg-secondary-bg hover:bg-[#6b4c68e5] px-8 sm:px-10 md:px-14 py-3 sm:py-4 md:py-5 mt-8 rounded-full text-white text-xl sm:text-2xl md:text-3xl'
        >
          Start Listening Now
        </button>
      </div>
    </div>
  );
}