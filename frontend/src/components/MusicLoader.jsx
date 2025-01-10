import React, { useState } from 'react';

const MusicLoader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const bars = Array.from({ length: 5 });
  const duration = 0.6;

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <button 
        onClick={toggleTheme} 
        className={`mb-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'} hover:bg-gray-300 transition-colors duration-300`}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="flex space-x-2">
        {bars.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-10 bg-gradient-to-t ${isDarkMode ? 'from-green-800 to-green-500' : 'from-fuchsia-800 to-fuchsia-500'} rounded-full`}
            style={{
              animation: `musicBounce ${duration}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>

      <style jsx="true">{`
        @keyframes musicBounce {
          0%, 100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MusicLoader;