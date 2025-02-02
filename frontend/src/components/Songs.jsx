import React, { useEffect } from 'react'
import { Pause, CirclePlus, CirclePlay, Music2 } from 'lucide-react'
import { AiFillPlusCircle } from "react-icons/ai";
import { currentPlayingSong } from '../store/atoms/currentPlayingSong.js'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useTogglePlayPause } from '../hooks/useTogglePlayPause.js'
import { useHandleAudio } from '../hooks/useHandleAudio.js'
import { songsAtom } from '../store/atoms/Songs.js'
import useSongs from '../hooks/useSongs.js'
import { likeState } from '../store/atoms/likeState.js'
import { useHandleCreateInteraction } from '../hooks/useHandleCreateInteraction.js'
import { useHandleRemoveInteraction } from '../hooks/useHandleRemoveInteraction.js'
import { FullScreen } from '../store/atoms/FullScreen.js';
import { likedSongsState } from '../store/atoms/likedSongsState.js';

export default function Songs() {
  const togglePlayPause = useTogglePlayPause();
  const currentPlaying = useRecoilValue(currentPlayingSong);
  const { handlePlay, handlePause } = useHandleAudio()
  const songs = useRecoilValue(songsAtom);
  const liked = useRecoilValue(likeState);
  const likedSongs = useRecoilValue(likedSongsState);
  const setIsFullScreen = useSetRecoilState(FullScreen);
  const { fetchSongs } = useSongs();
  const { createInteraction } = useHandleCreateInteraction();
  const { removeInteraction } = useHandleRemoveInteraction();

  useEffect(() => {
    fetchSongs();
    const songs = setInterval(() => {
      fetchSongs();
    }, 1000);
    return () => clearInterval(songs);
  }, []);

  function isLiked(songId){
    return likedSongs.some(likedSong => likedSong._id === songId);
  }

  return (
    <div className="h-full">
      <div className="px-6 flex-1 bg-[#171a1d] h-full">
        <h2 className="text-2xl font-bold mb-4">Melodia Matrix</h2>
        <div className="h-[calc(100%-150px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
          <div className="space-y-1">
            {songs.map((song) => (
              <div key={song._id} className="w-full hover:cursor-pointer">
                <div className="flex items-center gap-3 p-2 sm:p-3 hover:bg-[#9970952f] rounded-lg transition-colors">
                  <img
                    src={song.imageUrl}
                    alt={song.songTitle}
                    className="w-10 h-10 rounded-md flex-shrink-0"
                    onClick={
                      ()=>{
                        togglePlayPause(song)
                        setIsFullScreen(true)
                      }
                    }
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate sm:max-w-60 max-w-40">{song.songTitle}</div>
                    <div className="text-sm text-primary-text truncate sm:max-w-80 max-w-40 pb-1">{song.artistName}</div>
                  </div>
                  <div className='flex items-center xl:gap-14 sm:gap-10'>
                    <div className='gap-0 hidden md:flex truncate max-w-[100px]'>
                      <Music2 className='text-[#812e79]' size={16} />
                      <div className='text-sm text-gray-400'>{song.genre}</div>
                    </div>
                    {currentPlaying.isPlaying && currentPlaying.song._id === song._id
                      ?
                      <div title='Pause'>
                        <Pause
                          className='text-primary-text hover:cursor-pointer' strokeWidth={1}
                          onClick={() => {
                            handlePause();
                            togglePlayPause(song)
                          }}
                        />
                      </div>
                      :
                      <div title='Play'>
                        <CirclePlay
                          className='text-primary-text hover:cursor-pointer' strokeWidth={1}
                          onClick={() => {
                            handlePlay();
                            togglePlayPause(song)
                          }}
                        />
                      </div>
                    }
                    <div title='Save to Library'>
                      {(liked.includes(song._id)) || isLiked(song._id)
                      ?
                      <AiFillPlusCircle
                        onClick={()=>removeInteraction(song._id)}
                        size={24} 
                        className="text-primary-text hover:cursor-pointer hidden md:block" strokeWidth={1} 
                      />
                      :
                      <CirclePlus 
                        onClick={()=>createInteraction(song._id)}
                        size={24} 
                        className="text-primary-text hover:cursor-pointer hidden md:block" strokeWidth={1} 
                      />
                      }
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