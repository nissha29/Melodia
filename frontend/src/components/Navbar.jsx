import React from 'react'
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <div className='bg-secondary-bg rounded-lg h-20 2xl:mx-2xl-screen xl:mx-xl-screen lg:mx-lg-screen md:mx-md-screen sm:mx-sm-screen'>
        <div className='flex justify-between text-white md:px-16 md:py-3 sm:px-9 sm:py-4 font-playwrite'>
            <div className='md:text-3xl sm:text-2xl pt-2'>Melodia</div>
            <div className='md:hidden block pt-1'>
              <Menu size={40} strokeWidth={1}/>
            </div>
            <div className='hidden md:flex gap-4 md:text-2xl sm:text-xl'>
                <div className='pt-2'>Signup</div>
                <div className='bg-white rounded-full md:px-6 md:py-3 sm:px-5 sm:py-3 text-secondary-text'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar