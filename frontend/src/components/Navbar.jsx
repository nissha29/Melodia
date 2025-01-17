import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  
  function openMenuBar(){
    setIsOpen((prev)=> !prev)
  }


  return (
    <div className='relative bg-secondary-bg rounded-lg h-20 2xl:mx-2xl-screen xl:mx-xl-screen lg:mx-lg-screen md:mx-md-screen sm:mx-sm-screen mx-5'>
        <div className='flex justify-between text-white md:px-16 md:py-3 sm:px-9 sm:py-4 px-6 py-4 font-playwrite'>
            <div className='md:text-3xl sm:text-2xl text-2xl pt-2'>Melodia</div>
            <div className='md:hidden block pt-1 hover:cursor-pointer'>
              <Menu onClick={openMenuBar} size={40} strokeWidth={1}/>
            </div>
            <div className='hidden md:flex gap-4 md:text-2xl sm:text-xl'>
                <NavLink to={'/signup'} className='pt-2 hover:cursor-pointer'>Signup</NavLink>
                <NavLink to={'/signin'} className='bg-white rounded-full md:px-6 md:py-3 sm:px-5 sm:py-3 text-secondary-text hover:bg-[#e9e9e9] hover:cursor-pointer'>Login</NavLink>
            </div>

        </div>
        {isOpen && (
        <div className='md:hidden absolute right-10 top-[1.2rem] font-playwrite text-[1rem] text-center bg-white text-secondary-text flex flex-col gap-2 px-5 py-3 rounded-sm mt-10 z-10'>
          <NavLink to={'/signup'} className='px-2 py-1 rounded-lg hover:bg-[#d9bce036] text-secondary-text transition-colors duration-200'>
            Signup
          </NavLink>
          <NavLink to={'/signin'} className='px-5 py-1 rounded-lg hover:bg-[#d9bce036] text-secondary-text transition-colors duration-200'>
          Login
          </NavLink>
        </div>
        )}
    </div>
  )
}

 export default Navbar