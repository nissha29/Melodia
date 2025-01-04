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
          <img src={birds} alt="birds" className="xl:w-80 lg:w-64 md:w-56 sm:w-52" />
        </div>
        <div className="absolute lg:top-10 lg:right-36 md:top-10 md:right-16 sm:top-10 sm:right-16">
          <img 
            src={koyal} 
            alt="koyal" 
            className="animate-floating xl:w-72 lg:w-52 sm:w-36"
          />
        </div>
        <div className="absolute lg:top-12 lg:left-36 md:top-12 md:left-9 sm:top-12 sm:left-9">
          <img 
            src={sparrow} 
            alt="sparrow" 
            className="animate-floating delay-300 xl:w-56 lg:w-40 md:w-36 sm:w-28"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute md:top-[-5.5rem] md:left-[-3rem] sm:top-[-4.7rem] sm:left-[-3rem]">
          <img 
            src={yellowBird} 
            alt="Yellow Bird" 
            className="lg:w-40 xl:w-44 md:w-36 sm:w-32"
          />
        </div>
        <div className="text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl">Drop The Beat</div>
      </div>
      <div className="text-white xl:text-8xl lg:text-7xl md:text-6xl pt-14 sm:text-5xl">Feel The Heat</div>
      <button className="bg-secondary-bg rounded-full xl:px-9 xl:py-8 text-white mt-11 xl:text-4xl lg:px-6 lg:py-5 lg:text-3xl md:px-4 md:py-3 md:text-2xl sm:px-5 sm:py-4 sm:text-2xl">
        Start Listening Now
      </button>
    </div>
  );
};

export default HeroSection;