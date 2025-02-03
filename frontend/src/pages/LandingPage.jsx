import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TaglineSection from '../components/TaglineSection.jsx'
import Footer from '../components/Footer.jsx'
import ImageSection from '../components/ImageSection.jsx'

function LandingPage() {
  return (
    <div>
        <div className='bg-[#171a1d] pt-10 scrollbar-none xl:max-h-[85rem] md:max-h-[80rem] sm:max-h-[75rem] max-h-[80rem] w-full scrollbar-thin scrollbar-thumb-secondary-bg scrollbar-track-transparent'>
            <Navbar />
            <HeroSection />
            <ImageSection/>
            <TaglineSection />
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage