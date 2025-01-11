import React from 'react'
import baba from '../assets/baba.png'
import { Heart } from 'lucide-react';

function Footer() {
  return (
    <div>
     <div className='relative bottom-0'>
      <div className='absolute lg:top-[-12rem] lg:left-10 md:top-[-9rem] md:left-10 sm:top-[-9rem] sm:left-10 top-[-4.5rem] left-5 z-10 animate-floating'>
        <img src={baba} alt="baba" className='lg:w-72 md:w-56 sm:w-48 w-28'/>
      </div>
      <div className='bg-secondary-bg sm:rounded-tl-full rounded-tl-3xl lg:h-44 sm:h-36 h-32 sm:mt-20 lg:mt-28 relative'>
      <div className='text-white text-center font-playwrite flex absolute sm:bottom-3 sm:left-3 gap-2 bottom-1 left-1'>
                    © 2025 Melodia. All rights reserved.
                </div>
        <div className='text-white text-sm flex absolute sm:bottom-3 sm:right-3 gap-2 bottom-1 right-1 font-playwrite'>
          <div>Made with </div>
          <Heart className='text-red-600' size={24}/>
          <div>by Melodia</div>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default Footer