import React from 'react';
import birds from '../assets/birds.png'
import koyal from '../assets/koyal.png'
import sparrow from '../assets/sparrow.png'
import yellowBird from '../assets/yellowBird.png'

const HeroSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 font-playwrite">
      <div>
        <div className="flex justify-center items-center pt-20">
          <img src={birds} alt="birds" className="w-80" />
        </div>
        <div className="absolute top-10 right-36">
          <img 
            src={koyal} 
            alt="koyal" 
            className="animate-floating"
          />
        </div>
        <div className="absolute top-12 left-36">
          <img 
            src={sparrow} 
            alt="koyal" 
            className="animate-floating delay-300"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-5.5rem] left-[-3rem]">
          <img 
            src={yellowBird} 
            alt="Yellow Bird" 
            className=""
          />
        </div>
        <div className="text-white text-9xl">Drop The Beat</div>
      </div>
      <div className="text-white text-8xl pt-14">Feel The Heat</div>
      <button className="bg-secondary-bg rounded-full px-9 py-8 text-white mt-11 text-4xl">
        Start Listening Now
      </button>
    </div>
  );
};

export default HeroSection;