import React from 'react'

export default function Categories() {
    const genres = [
        'Bollywood', 'Classical', 'Devotional', 'Folk', 'Ghazal', 'Bhajan', 'Qawwali',
        'Indie Pop', 'Sufi', 'Punjabi', 'Bhangra'];

    return (
        <div className='w-[100rem]'>
            <div className='flex gap-4 px-4 py-2 overflow-x-scroll no-scrollbar scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent'>
                {genres.map((genre, index) => (
                    <div
                        key={index}
                        className=' 
                            text-white 
                            rounded-full 
                            px-4 
                            py-1
                            text-sm 
                            flex 
                            items-center 
                            justify-center 
                            hover:bg-[#6b4c68c2] 
                            transition-colors 
                            cursor-pointer 
                            shrink-0  
                            border
                            border-gray-800
                        '
                    >
                        {genre}
                    </div>
                ))}
                <div className='mt-1 text-lg'>and more....</div>
            </div>
        </div>
    )
}