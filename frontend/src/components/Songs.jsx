import React from 'react'
import { Heart, Ellipsis } from 'lucide-react';

export default function Songs({ topSongs }) {
  return (
    <div>
        <div className="px-6 py-4 flex-1 overflow-hidden h-[27rem]">
            <h2 className="text-xl font-bold mb-4">This week's top #20</h2>
            <div className="h-full overflow-y-auto pr-2 pb-6 scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent">
              <div className="space-y-2">
                {topSongs.map((song) => (
                  <div key={song.id}>
                    <div className="flex items-center gap-4 p-4 hover:bg-[#9970952f] rounded-lg transition-colors">
                      <img src="/api/placeholder/40/40" alt={song.title} className="w-10 h-10 rounded" />
                      <div className="flex-1">
                        <div className="font-semibold">{song.title}</div>
                        <div className="text-sm text-primary-text">{song.artist}</div>
                      </div>
                      <div className='flex gap-14'>
                        <div className="text-sm text-primary-text mt-1">{song.genre}</div>
                        <div className="text-sm text-primary-text mt-1">{song.duration}</div>
                        <Heart size={20} className="text-primary-text mt-1" />
                        <button className="text-sm text-white bg-secondary-bg rounded-2xl px-3 py-1">Favorite</button>
                        <Ellipsis size={28} className="text-primary-text" />
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
