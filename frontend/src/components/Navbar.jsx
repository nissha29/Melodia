import React from 'react'

function Navbar() {
  return (
    <div className='bg-secondary-bg rounded-lg h-20 mx-default'>
        <div className='flex justify-between text-white px-16 py-3 font-playwrite'>
            <div className='text-3xl pt-2'>Melodia</div>
            <div className='flex gap-4 text-2xl'>
                <div className='pt-2'>Signup</div>
                <div className='bg-white rounded-full px-6 py-3 text-secondary-text'>Login</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar