import React, { useState } from 'react';
import { Home, Library, Plus, Menu } from 'lucide-react';

function HomeSidebar() {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };
    
    return (
        <div className='flex h-screen'>
            {/* Menu Icon */}
            <div className={`px-6 py-8 cursor-pointer ${isOpen ? 'absolute' : ''}`}>
                <Menu onClick={handleToggle}/>
            </div>
            
            {/* Sidebar Content */}
            <div className={`${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-[#343a40ee]`}>
                <div className={`p-6 pt-24 flex flex-col gap-6 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    <div className="flex items-center gap-2">
                        <Home size={24} />
                        <span className='text-primary-text'>Home</span>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Library size={24} />
                            <span className='text-primary-text'>Library</span>
                        </div>
                        <div className="pl-8 space-y-2 text-[#997095]">
                            <div>Discover</div>
                            <div>Genre</div>
                            <div>Songs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSidebar;