import React from 'react'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import guitar from '../assets/guitar.png'
import popo from '../assets/popo.png'
import dance from '../assets/dance.png'

function FeaturesSection() {
  return (
    <div className='relative sm:bg-secondary-bg rounded-[5rem] md:h-96 sm:h-[65rem] md:mt-24 sm:mt-40 2xl:mx-2xl-screen xl:mx-xl-screen lg:mx-lg-screen md:mx-md-screen sm:mx-sm-screen mx-24'>
        <div className='flex justify-center items-center md:gap-14 sm:gap-10 gap-2 font-playwrite xl:px-20 sm:py-12 py-4 lg:px-11 md:px-8 md:flex-row flex-col'>
            <div className='sm:absolute xl:top-[-16rem] lg:left-[-4rem] lg:top-[-14.5rem] md:top-[-11rem] md:left-[-2.5rem] sm:top-[-9.3rem] sm:left-[-3.3rem]'>
                <img src={man} alt="man" className='xl:w-80 lg:w-72 md:w-56 sm:w-56 w-56'/>
            </div>
            <div className='bg-white rounded-[2rem] md:w-[25rem] sm:w-[21rem] w-[18rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={guitar} alt="guitar person" className='w-24 h-20 mt-2'/>
                </div>
                <div className='xl:text-xl lg:text-lg md:text-lg sm:text-xl font-medium text-secondary-text'>Add Your Tunes</div>
                <div className='2xl:text-[1.1rem] xl:text-[1rem] md:text-sm sm:text-lg text-primary-text px-2 text-center'>Upload your favorite tracks in seconds. Supports MP3, WAV, and even that obscure format from the 90s you still love!</div>
            </div>
            <div  className='bg-white rounded-[2rem] md:w-[25rem] sm:w-[21rem] w-[18rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={popo} alt="popo person" className='w-24 h-20 mt-2'/>
                </div>
                <div className='xl:text-xl lg:text-lg md:text-lg sm:text-xl font-medium text-secondary-text'>Edit Track Details</div>
                <div className='2xl:text-[1.1rem] xl:text-[1rem] md:text-sm sm:text-lg text-primary-text px-2 text-center'>Fix those annoying typos in song titles or add missing metadata. Your library, your rules!</div>
            </div>
            <div className='bg-white rounded-[2rem] md:w-[25rem] sm:w-[21rem] w-[18rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={dance} alt="dancing person" className='w-14 h-20 mt-2'/>
                </div>
                <div className='xl:text-xl lg:text-lg md:text-lg sm:text-xl font-medium text-secondary-text'>Smooth Playback</div>
                <div className='2xl:text-[1.1rem] xl:text-[1rem] md:text-sm sm:text-lg text-primary-text px-2 text-center'>Crystal clear playback with volume control, shuffle, and repeat. Plus a progress bar that actually shows progress!</div>
            </div>
            <div className='sm:absolute xl:top-[-23rem] xl:right-[-8rem] lg:top-[-19rem] lg:right-[-5.5rem] md:top-[-15rem] md:right-[-1.5rem] sm:bottom-[-8rem] sm:right-[-6rem]'>
                <img src={woman} alt="woman" className='xl:w-96 lg:w-80 md:w-64 sm:w-60 w-80 max-sm:h-60'/>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection