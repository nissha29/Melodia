import React, { useState } from 'react';
import { Home, Library, Plus, Menu, X } from 'lucide-react';

function HomeSidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className='flex h-screen relative font-playwrite'>
            {/* Menu Icon */}
            <div className={`
                px-3 sm:px-6 py-9 cursor-pointer z-50
                absolute
                lg:block
            `}>
                {isOpen ? 
                    <X onClick={handleToggle} className='text-white'/> : 
                    <Menu onClick={handleToggle} className='text-white sm:size-7 size-6'/>
                }
            </div>

            {/* Sidebar for all screen sizes */}
            <div className={`
                ${isOpen ? 'w-64' : 'w-0'}
                transition-all duration-300 
                overflow-hidden 
                bg-[#0f1214]
                absolute
                h-full z-10
                border border-gray-800
            `}>
                <div className={`
                    p-6 pt-24 flex flex-col gap-6 
                    ${isOpen ? 'opacity-100' : 'opacity-0'}
                    transition-opacity duration-300
                `}>
                    <div className="flex items-center gap-2">
                        <Home size={24} className='text-white'/>
                        <span className='text-primary-text cursor-pointer'>Home</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Library size={24} className='text-white'/>
                            <span className='text-primary-text cursor-pointer'>Library</span>
                        </div>
                        <div className="pl-8 space-y-2 text-[#997095] flex flex-col gap-4">
                            <div className='cursor-pointer'>Discover</div>
                            <div className='cursor-pointer'>Genre</div>
                            <div className='cursor-pointer'>Songs</div>
                            <div className='cursor-pointer'>Liked Songs</div>
                            <div className='cursor-pointer'>Favorites</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSidebar;