import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection.jsx'
import TaglineSection from '../components/TaglineSection.jsx'
import Footer from '../components/Footer.jsx'

function LandingPage() {
  return (
    <div>
        <div className='pt-10 xl:h-[96.5rem] lg:h-[85rem] md:h-[70.5rem] sm:h-[111.5rem] h-[93rem]'>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <TaglineSection />
            <Footer />
        </div>
    </div>
  )
}

export default LandingPage