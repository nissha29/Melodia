import React from 'react';
import { Heart, Search } from 'lucide-react';
import HomeSidebar from '../components/HomeSidebar';
import Disco from '../assets/disco.png';
import HomeNavbar from '../components/HomeNavbar';

const HomePage = () => {

  const topSongs = [
    { id: 1, title: 'Tennessee Whiskey', artist: 'Chris Stapleton', plays: '34,323,850', genre: 'Country', duration: '04:09' },
    { id: 2, title: 'I like you', artist: 'Post Malone', plays: '29,784,164', genre: 'Hip-Hop / Pop', duration: '03:18' },
    { id: 3, title: 'Come back home', artist: 'Sofia Carson', plays: '28,370,567', genre: 'Soundtrack', duration: '03:24' }
  ];

  return (
    <div className="flex h-screen bg-[#343a40ee] text-white font-playwrite">
      {/* Sidebar */}
      <HomeSidebar/>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <HomeNavbar/>

        {/* Hero Section */}
        <div className="px-6 py-8 relative">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img src={Disco} alt="Concert" className="w-full h-full object-cover opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#343a40ee] to-transparent p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-2">MUSIC CHANGES THE<br />WORLD BECAUSE IT CHANGES PEOPLE</h1>
              <p className="mb-4">We aim to achieve our goals by using creative music processes.</p>
              <button className="w-32 text-lg px-4 py-3 bg-secondary-bg rounded-full">Play Now</button>
            </div>
          </div>
        </div>

        {/* Top Songs */}
        <div className="px-6 py-8">
          <h2 className="text-xl font-bold mb-4">This week's top #20</h2>
          <div className="space-y-2">
            {topSongs.map((song, index) => (
              <div>
                <div key={song._id} className="flex items-center gap-4 p-4 hover:bg-[#99709536] rounded-lg transition-colors">
                <img src="/api/placeholder/40/40" alt={song.title} className="w-10 h-10 rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{song.title}</div>
                  <div className="text-sm text-primary-text">{song.artist}</div>
                </div>
                <div className="text-sm text-primary-text">{song.genre}</div>
                <div className="text-sm text-primary-text">{song.duration}</div>
                <Heart size={20} className="text-primary-text" />
              </div>
              <hr className='opacity-5'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;