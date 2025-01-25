import React from 'react'
import Disco from '../assets/disco.png';

export default function HomeHeroBanner() {
  return (
    <div>
        <div className="sm:px-6 px-5 py-2 relative">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
               <img src={Disco} alt="Concert" className="w-full h-full object-cover object-center opacity-55" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#343a40ee] to-transparent sm:p-8 p-5 flex flex-col justify-center">
                 <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-lg font-bold mb-6 sm:mb-2">MUSIC CHANGES THE<br />WORLD BECAUSE IT CHANGES PEOPLE</h1>
                 <p className="mb-4 hidden sm:block text-lg">We aim to achieve our goals by using creative music processes.</p>
                 <button className="w-32 text-sm px-2 py-2 sm:text-lg sm:px-4 sm:py-3 bg-secondary-bg rounded-full">Play Now</button>
               </div>
            </div>
        </div>
    </div>
  )
}
