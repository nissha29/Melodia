import React from 'react';
import HomeSidebar from '../components/HomeSidebar';
import HomeNavbar from '../components/HomeNavbar';
import HomeHeroBanner from '../components/HomeHeroBanner';
import Songs from '../components/Songs';
import Categories from '../components/Categories';
import PlaybackControls from '../components/PlaybackControls';

const HomePage = () => {

  return (
    <div className='flex h-full bg-[#171a1d]'>
      <div>
        <HomeSidebar />
      </div>
      <div className="flex text-white font-playwrite w-full h-screen overflow-hidden justify-evenly">
        <div className="flex-1 flex flex-col justify-between">
          <HomeNavbar />
          <div className='flex flex-col overflow-y-scroll scrollbar-none'>
            <HomeHeroBanner />
            <Songs/>
          </div>
          <PlaybackControls/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;