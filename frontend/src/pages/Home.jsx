import React from 'react';
import HomeSidebar from '../components/HomeSidebar';
import HomeNavbar from '../components/HomeNavbar';
import HomeHeroBanner from '../components/HomeHeroBanner';
import Songs from '../components/Songs';

const HomePage = () => {
  const topSongs = [
    { id: 1, title: 'Tennessee Whiskey', artist: 'Chris Stapleton', plays: '34,323,850', genre: 'Country', duration: '04:09' },
    { id: 2, title: 'I like you', artist: 'Post Malone', plays: '29,784,164', genre: 'Hip-Hop / Pop', duration: '03:18' },
    { id: 3, title: 'Come back home', artist: 'Sofia Carson', plays: '28,370,567', genre: 'Soundtrack', duration: '03:24' },
    { id: 4, title: 'Some Song', artist: 'Some Artist', plays: '20,000,000', genre: 'Pop', duration: '03:45' },
    { id: 5, title: 'Another Song', artist: 'Another Artist', plays: '15,000,000', genre: 'Rock', duration: '04:15' },
    { id: 6, title: 'Another Song 2', artist: 'Another Artist', plays: '15,000,000', genre: 'Rock', duration: '04:15' },
    { id: 7, title: 'Another Song 3', artist: 'Another Artist', plays: '15,000,000', genre: 'Rock', duration: '04:15' },
    { id: 8, title: 'Another Song 4', artist: 'Another Artist', plays: '15,000,000', genre: 'Rock', duration: '04:15' },
    { id: 9, title: 'Another Song 4', artist: 'Another Artist', plays: '15,000,000', genre: 'Rock', duration: '04:15' }
  ];

  return (
    <div className='flex h-screen overflow-hidden'>
      <div>
        <HomeSidebar />
      </div>
      <div className="flex bg-[#171a1d] text-white font-playwrite w-full pl-10">
        <div className="flex-1 flex flex-col">
          <HomeNavbar />
          <HomeHeroBanner />
          <Songs topSongs={topSongs}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;