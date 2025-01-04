import React from 'react'
import baba from '../assets/baba.png'
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <div className='relative'>
      <div className='absolute lg:top-[-12rem] lg:left-10 md:top-[-9rem] md:left-10 sm:top-[-9rem] sm:left-10 z-10 animate-floating'>
        <img src={baba} alt="baba" className='lg:w-72 md:w-56 sm:w-48'/>
      </div>
      <div className='bg-secondary-bg rounded-tl-full lg:h-44 sm:h-36 sm:mt-20 lg:mt-28 relative'>
        <div className='text-white text-2xl flex absolute bottom-3 right-3 gap-2 font-playwrite'>
          <div>Made with </div>
          <Heart className='text-red-600' size={32}/>
          <div>by Melodia</div>
        </div>
      </div>
    </div>
  )
}

export default Footer