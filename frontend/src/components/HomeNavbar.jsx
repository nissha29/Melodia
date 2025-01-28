import React, { useState } from 'react'
import { Search } from 'lucide-react';
import AddSong from './AddSong';

function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="py-6 px-5 flex justify-between items-center">
        <div className="flex gap-2">
          <div className='px-4 py-2 sm:text-3xl text-2xl text-[#812e79] font-medium sm:ml-8 ml-3'>Melodia</div>
          <button className="px-4 py-2  hidden xl:block">Library</button>
        </div>
        <div className="flex items-center xl:gap-4 gap-2">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 text-[#997095]" size={20} />
            <input
              type="text"
              placeholder="Search music..."
              className="pl-10 pr-4 xl:w-96 w-72 py-2 rounded-full bg-transparent border border-secondary-bg text-white placeholder-[#997095] outline-none"
            />
          </div>
          <button className='bg-secondary-bg text-white sm:px-5 sm:py-3 py-2 px-3 rounded-full text-sm hover:cursor-pointer' onClick={handleClick}>Add New Song</button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-opacity-50 bg-black">
          <div className="relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-4 hover:text-gray-300 text-white w-6 h-6 rounded-full text-4xl"
            >
              ×
            </button>
            <AddSong isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeNavbar