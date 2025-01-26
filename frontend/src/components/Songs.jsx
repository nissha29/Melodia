import React, { useEffect, useState } from 'react'
import { Heart, Ellipsis, Play, Pause } from 'lucide-react'
import axios from 'axios'
import URL from '../../constants.js'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong.js'
import { useRecoilValue } from 'recoil'
import { useTogglePlayPause } from '../hooks/togglePlayPause.js'
import { useHandleAudio } from '../hooks/handleAudio'

export default function Songs() {
  const [songs, setSongs] = useState([]);
  const togglePlayPause = useTogglePlayPause();
  const currentPlaying = useRecoilValue(currentPlayingSong);
  const { handlePlay, handlePause } = useHandleAudio()

  async function getSongs(){
    try {
      const response = await axios.get(
        `${URL}/api/track`,
        { withCredentials: true }
      )
      setSongs(response.data.tracks)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSongs();
  }, [])

  useEffect(()=>{
    getSongs();
  }, [songs])

  return (
    <div className="h-full">
      <div className="px-6 flex-1 bg-[#171a1d] h-full">
        <h2 className="text-2xl font-bold mt-4 mb-4">Melodia Matrix</h2>
        <div className="h-[calc(100%-150px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
          <div className="space-y-1">
            {songs.map((song) => (
              <div key={song._id} className="w-full">
                <div className="flex items-center gap-3 p-2 sm:p-3 hover:bg-[#9970952f] rounded-lg transition-colors">
                  <img 
                    src={song.imageUrl} 
                    alt={song.songTitle} 
                    className="w-10 h-10 rounded-md flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{song.songTitle}</div>
                    <div className="text-sm text-primary-text truncate">{song.artistName}</div>
                  </div>
                  <div className='flex items-center xl:gap-14 sm:gap-10 gap-3'>
                    <div className="text-sm text-primary-text mt-1 hidden md:block truncate max-w-[100px]">{song.genre}</div>
                    { currentPlaying.isPlaying && currentPlaying.song._id === song._id
                      ? 
                      <Pause 
                        className='text-primary-text hover:cursor-pointer' strokeWidth={1}
                        onClick={() => {
                          handlePause();
                          togglePlayPause(song)
                        }}
                      />
                      : 
                      <Play 
                        className='text-primary-text hover:cursor-pointer' strokeWidth={1}
                        onClick={() => {
                          handlePlay();
                          togglePlayPause(song)
                        }}
                      />
                    }
                    <Heart size={24} className="text-primary-text mt-1 hover:cursor-pointer hidden md:block" strokeWidth={1}/>
                    <button className="text-sm text-white bg-secondary-bg rounded-2xl px-3 py-1 hidden md:block">Favorite</button>
                    <Ellipsis size={28} className="text-primary-text hover:cursor-pointer" strokeWidth={1}/>
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