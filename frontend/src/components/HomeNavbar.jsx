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
        </div>
        <div className="flex items-center xl:gap-4 gap-2">
          <button className='hidden sm:block bg-secondary-bg text-white sm:px-5 sm:py-3 py-2 px-3 rounded-full text-sm hover:cursor-pointer' onClick={handleClick}>Add New Artist</ button>
          <button className='bg-secondary-bg text-white sm:px-5 sm:py-3 py-2 px-3 rounded-full text-sm hover:cursor-pointer' onClick={handleClick}>Add New Track</button>
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