import React from 'react'
import { Heart, Ellipsis } from 'lucide-react';

export default function Songs({ topSongs }) {
  return (
    <div>
        <div className="px-6 py-4 flex-1 overflow-hidden h-[27rem] bg-[#171a1d]">
            <h2 className="text-2xl font-bold mb-8">Melodia Matrix</h2>
            <div className="h-full overflow-y-auto pr-2 pb-2 sm:pb-6 scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
              <div className="space-y-2">
                {topSongs.map((song) => (
                  <div key={song.id}>
                    <div className="flex items-center gap-5 p-2 sm:p-4 hover:bg-[#9970952f] rounded-lg transition-colors">
                      <img src="/api/placeholder/40/40" alt={song.title} className="w-10 h-10 rounded" />
                      <div className="flex-1">
                        <div className="font-semibold">{song.title}</div>
                        <div className="text-sm text-primary-text">{song.artist}</div>
                      </div>
                      <div className='flex xl:gap-14 gap-6'>
                        <div className="text-sm text-primary-text mt-1 hidden md:block">{song.genre}</div>
                        <div className="text-sm text-primary-text mt-1 hidden md:block">{song.duration}</div>
                        <Heart size={20} className="text-primary-text mt-1 hover:cursor-pointer hidden md:block" />
                        <button className="text-sm text-white bg-secondary-bg rounded-2xl px-3 py-1 hidden md:block">Favorite</button>
                        <Ellipsis size={28} className="text-primary-text hover:cursor-pointer" />
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
