import React, { useEffect } from 'react'
import { Heart, Ellipsis, Play, Pause, CirclePlus, CirclePlay } from 'lucide-react'
import { currentPlayingSong } from '../store/atoms/currentPlayingSong.js'
import { useRecoilValue } from 'recoil'
import { useTogglePlayPause } from '../hooks/useTogglePlayPause.js'
import { useHandleAudio } from '../hooks/useHandleAudio.js'
import { songsAtom } from '../store/atoms/Songs.js'
import useSongs from '../hooks/useSongs.js'

export default function Songs() {
  const togglePlayPause = useTogglePlayPause();
  const currentPlaying = useRecoilValue(currentPlayingSong);
  const { handlePlay, handlePause } = useHandleAudio()
  const songs = useRecoilValue(songsAtom);
  const { fetchSongs } = useSongs();

  useEffect(() => {
    fetchSongs();
    const songs = setInterval(() => {
      fetchSongs();
    }, 2000);
    return () => clearInterval(songs);
  }, [])

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
                    <div className="text-sm text-primary-text truncate pb-1">{song.artistName}</div>
                  </div>
                  <div className='flex items-center xl:gap-14 sm:gap-10 gap-3'>
                    <div title="Genre" className="text-sm text-primary-text mt-1 pb-1 hidden md:block truncate max-w-[100px]">{song.genre}</div>
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
                      <CirclePlus size={24} className="text-primary-text hover:cursor-pointer hidden md:block" strokeWidth={1} />
                    </div>
                    <Ellipsis size={28} className="text-primary-text hover:cursor-pointer" strokeWidth={1} />
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