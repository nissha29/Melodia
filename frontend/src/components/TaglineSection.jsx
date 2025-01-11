import React from 'react'
import radio from '../assets/radio.gif';

function TaglineSection() {
  return (
    <div className='bg-white text-secondary-text 2xl:text-6xl xl:text-5xl lg:text-[2.5rem] md:text-3xl sm:text-[1.7rem] rounded-2xl sm:mt-24 mb-10 sm:mb-0 lg:h-80 md:h-64 sm:h-60 h-32 flex justify-center items-center font-playwrite text-center'>
      Baaki sab noise hai, Melodia is the choice hai
      <div className='lg:top-[-12rem] lg:left-10 md:top-[-9rem] md:left-10 sm:top-[-9rem] sm:left-10 top-[-4.5rem] left-5 z-10 animate-floating'>
              <img src={radio} alt="radio" className='lg:w-70 md:w-56 sm:w-48 w-28'/>
            </div>
  </div>

  )
}

export default TaglineSection