import React from 'react';

const MusicLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="flex items-center gap-2 p-8">
    
        {[0.9, 1.2, 0.8, 1.4, 1.0, 0.7, 1.3, 0.9].map((duration, index) => (
          <div
            key={index}
            className={`w-1.5 h-12 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-full`}
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