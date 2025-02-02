import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection.jsx'
import TaglineSection from '../components/TaglineSection.jsx'
import Footer from '../components/Footer.jsx'
import ImageSection from '../components/ImageSection.jsx'

function LandingPage() {
  return (
    <div>
        <div className='bg-[#171a1d] pt-10 scrollbar-none xl:max-h-[133rem] lg:max-h-[120rem] md:max-h-[115rem] sm:max-h-[160rem] max-h-[160rem]'>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <ImageSection/>
            <TaglineSection />
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage