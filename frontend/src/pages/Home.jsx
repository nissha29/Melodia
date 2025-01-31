import React from 'react';
import HomeSidebar from '../components/HomeSidebar';
import HomeNavbar from '../components/HomeNavbar';
import Categories from '../components/Categories';
import PlaybackControls from '../components/PlaybackControls';
import { useRecoilValue } from 'recoil';
import { FullScreen } from '../store/atoms/FullScreen';
import FullScreenPlayer from '../components/FullScreenPlayer';
import { useHandleAudio } from '../hooks/useHandleAudio';
import { currentPlayingSong } from '../store/atoms/currentPlayingSong';
import { Outlet, useLocation } from 'react-router-dom';

const HomePage = () => {
  const isFullScreen = useRecoilValue(FullScreen);
  const location = useLocation();
  const { audioRef, currentTime, handleTimeUpdate, handleLoadedMetadata, handlePause, handlePlay, handleSeek, handleVolumeChange } = useHandleAudio();
  const currentPlaying = useRecoilValue(currentPlayingSong
  );

  function getSourceType(){
    const path = location.pathname;
    if(path === "/home"){
      return "home";
    }else if(path === "/home/liked"){
      return "liked";
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={currentPlaying.song.trackUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="hidden"
      />
    {
      isFullScreen
      ? 
      (
      <FullScreenPlayer
         handlePlay={handlePlay}
         handlePause={handlePause}
         handleSeek={handleSeek}
         handleVolumeChange={handleVolumeChange}
         currentTime={currentTime}
      />
      )
      :
      (
      <div className='flex h-full bg-[#171a1d]'>
        <div>
          <HomeSidebar />
        </div>
        <div className="flex text-white font-playwrite w-full h-screen overflow-hidden justify-evenly">
          <div className="flex-1 flex flex-col justify-between">
            <HomeNavbar />
            <Outlet/>
            <PlaybackControls
              handlePlay={handlePlay}
              handlePause={handlePause}
              handleSeek={handleSeek}
              handleVolumeChange={handleVolumeChange}
              currentTime={currentTime}
              sourceType={getSourceType()}
            />
          </div>
        </div>
      </div>
      )
    }
    </>
  );
};

export default HomePage;