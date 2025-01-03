import React from 'react'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import guitar from '../assets/guitar.png'
import popo from '../assets/popo.png'
import dance from '../assets/dance.png'

function FeaturesSection() {
  return (
    <div className='relative bg-secondary-bg rounded-[5rem] h-96 mt-24 mx-default'>
        <div className='flex justify-center items-center gap-14 font-playwrite px-20 py-12'>
            <div className='absolute top-[-16rem] left-[-4rem]'>
                <img src={man} alt="man" className='w-80'/>
            </div>
            <div className='absolute top-[-22rem] right-[-6rem]'>
                <img src={woman} alt="woman" className='w-96 animate-floating'/>
            </div>
            <div className='bg-white rounded-[2rem] w-[25rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={guitar} alt="guitar person" className='w-24 h-20 mt-2'/>
                </div>
                <div className='text-xl font-medium text-secondary-text'>Add Your Tunes</div>
                <div className='text-[1.1rem] text-primary-text px-2 text-center'>Upload your favorite tracks in seconds. Supports MP3, WAV, and even that obscure format from the 90s you still love!</div>
            </div>
            <div  className='bg-white rounded-[2rem] w-[25rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={popo} alt="popo person" className='w-24 h-20 mt-2'/>
                </div>
                <div className='text-xl font-medium text-secondary-text'>Edit Track Details</div>
                <div className='text-[1.1rem] text-primary-text px-2 text-center'>Fix those annoying typos in song titles or add missing metadata. Your library, your rules!</div>
            </div>
            <div className='bg-white rounded-[2rem] w-[25rem] h-72 flex flex-col items-center gap-2'>
                <div>
                    <img src={dance} alt="dancing person" className='w-14 h-20 mt-2'/>
                </div>
                <div className='text-xl font-medium text-secondary-text'>Smooth Playback</div>
                <div className='text-[1.1rem] text-primary-text px-2 text-center'>Crystal clear playback with volume control, shuffle, and repeat. Plus a progress bar that actually shows progress!</div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection