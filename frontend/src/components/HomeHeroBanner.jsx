import React from 'react'
import Disco from '../assets/disco.png';

export default function HomeHeroBanner() {
  return (
    <div>
        <div className="px-6 py-8 relative">
            <div className="relative h-72 rounded-xl overflow-hidden">
               <img src={Disco} alt="Concert" className="w-full h-full object-cover object-center opacity-70" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#343a40ee] to-transparent p-8 flex flex-col justify-center">
                 <h1 className="xl:text-4xl text-3xl font-bold mb-2">MUSIC CHANGES THE<br />WORLD BECAUSE IT CHANGES PEOPLE</h1>
                 <p className="mb-4">We aim to achieve our goals by using creative music processes.</p>
                 <button className="w-32 text-lg px-4 py-3 bg-secondary-bg rounded-full">Play Now</button>
               </div>
            </div>
        </div>
    </div>
  )
}
