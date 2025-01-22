import React, { useState } from 'react'
import { Search } from 'lucide-react';
import AddSong from './AddSong';

function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleClick() {
    setIsOpen(prev => !prev)
  }

  return (
    <div>
      <div className="p-6 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-[#6B4C68] text-white">What's new?</button>
          <button className="px-4 py-2 text-[#997095]">Liked songs</button>
          <button className="px-4 py-2 text-[#997095]">Favorites</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-[#997095]" size={20} />
            <input
              type="text"
              placeholder="Search music, albums, artists..."
              className="pl-10 pr-4 w-96 py-2 rounded-full bg-transparent border border-secondary-bg text-white placeholder-[#997095] outline-none"
            />
          </div>
          <button className='bg-secondary-bg text-white px-5 py-3 rounded-full' onClick={handleClick}>Add New Song</button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-4 hover:text-gray-300 text-white w-6 h-6 rounded-full text-4xl"
            >
              ×
            </button>
            <AddSong/>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeNavbar