import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong'
import { Music, SkipBack, Pause, CirclePlay, SkipForward, CirclePlus, Volume2, Minimize2, Music2 } from 'lucide-react'
import { AiFillPlusCircle } from 'react-icons/ai'
import formatSecondsToMinutesSeconds from '../utils/formatSecondsToMinutesSeconds'
import { useTogglePlayPause } from '../hooks/useTogglePlayPause'
import { useSkipControls } from '../hooks/useSkipControls'
import { FullScreen } from '../store/atoms/FullScreen'
import { likeState } from '../store/atoms/likeState'
import { useHandleCreateInteraction } from '../hooks/useHandleCreateInteraction'
import { useHandleRemoveInteraction } from '../hooks/useHandleRemoveInteraction'
import { likedSongsState } from '../store/atoms/likedSongsState'

export default function FullScreenPlayer({ handlePlay, handlePause, handleSeek, handleVolumeChange, currentTime }) {
  const currentPlaying = useRecoilValue(currentPlayingSong);
  const togglePlayPause = useTogglePlayPause();
  const { handleSkip } = useSkipControls();
  const likedSongs = useRecoilValue(likedSongsState);
  const setIsFullScreen = useSetRecoilState(FullScreen);
  const liked = useRecoilValue(likeState);
  const { createInteraction } = useHandleCreateInteraction();
  const { removeInteraction } = useHandleRemoveInteraction();

  function isLiked(songId){
    return likedSongs.some(likedSong => likedSong._id === songId);
  }

  return (
    <div className={`relative bg-[#0f1214] w-screen h-screen font-playwrite flex flex-col gap-y-2 justify-center items-center px-10 overflow-y-scroll overflow-x-hidden scrollbar-none`}>
      <div className='flex lg:flex-row flex-col lg:gap-11 md:gap-9 items-center mt-28'>
        <img src={currentPlaying.song.imageUrl} alt="Cover image" className='hover:scale-105 2xl:w-[27rem] 2xl:h-[27rem] lg:w-96 lg:h-96 md:w-[30rem] md:h-64 w-[29rem] sm:h-80 h-64 rounded-3xl' />
        <div className='flex gap-8 items-center'>
          <Music strokeWidth={1} className='text-primary-text animate-spin 2xl:size-20 md:size-16 size-14 hidden lg:block' />
          <div className='flex flex-col gap-3 text-center lg:text-start mt-5'>
            <div className='2xl:text-5xl lg:text-4xl md:text-3xl text-3xl text-white'>{currentPlaying.song.songTitle}</div>
            <div className='2xl:text-2xl lg:text-xl md:text-lg text-lg text-primary-text'>{currentPlaying.song.artistName}</div>
            <div className='gap-2 hidden lg:flex'>
              <Music2 className='text-[#812e79]' size={20} />
              <div className='text-sm text-gray-400'>{currentPlaying.song.genre}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-white items-center justify-center'>
        <div className='flex gap-3 lg:pt-28 pt-8'>
          <SkipBack
            className='hover:text-primary-text hover:cursor-pointer size-9' strokeWidth={0.8}
            onClick={() => handleSkip('backward')}
          />
          {currentPlaying.isPlaying
            ?
            <Pause
              className='hover:text-primary-text hover:cursor-pointer size-9' strokeWidth={0.8}
              onClick={() => {
                handlePause();
                togglePlayPause(currentPlaying.song)
              }}
            />
            :
            <CirclePlay
              className='hover:text-primary-text hover:cursor-pointer size-9' strokeWidth={0.8}
              size={24}
              onClick={() => {
                handlePlay();
                togglePlayPause(currentPlaying.song)
              }}
            />
          }
          <SkipForward
            className='hover:text-primary-text hover:cursor-pointer size-9' strokeWidth={1}
            onClick={() => handleSkip('forward')}
          />
        </div>
        <div className='h-40'>
          <div className='py-6 flex items-center'>
            <div className='text-sm font-thin font-playwrite pr-2 mt-1'>{formatSecondsToMinutesSeconds(currentTime)}</div>
            <input
              type="range"
              min={0}
              max={currentPlaying.song.duration}
              value={currentTime}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="
              w-full min-w-52 sm:w-[27rem] md:w-[30rem] lg:min-w-[48rem] xl:min-w-[64rem] 2xl:min-w-[78rem]
              h-1
              opacity-100
              bg-transparent
              rounded-full
              accent-primary-text
              cursor-pointer
              focus:outline-none
            "
            />
            <div className='text-sm font-thin font-playwrite pl-2 mt-1'>{formatSecondsToMinutesSeconds(currentPlaying.song.duration)}</div>
          </div>
          <div className='flex justify-between px-5'>
            {(liked.includes(currentPlaying.song._id) || isLiked(currentPlaying.song._id))
              ?
              <AiFillPlusCircle
                onClick={() => removeInteraction(currentPlaying.song._id)}
                className='text-primary-text hover:cursor-pointer' strokeWidth={1}
                size={28}
              />
              :
              <CirclePlus
                onClick={() => createInteraction(currentPlaying.song._id)}
                className='hover:text-primary-text hover:cursor-pointer' strokeWidth={1}
                size={28}
              />
            }
            <div className='flex gap-3 justify-center items-center'>
              <div className='flex gap-1.5 hover:text-primary-text'>
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
              <Minimize2
                className='hover:text-primary-text hover:cursor-pointer size-8'
                onClick={() => {
                  setIsFullScreen(false)
                }}
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
