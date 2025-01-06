import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection.jsx'
import TaglineSection from '../components/TaglineSection.jsx'
import Footer from '../components/Footer.jsx'

function LandingPage() {
  return (
    <div>
        <div className='bg-primary-bg pt-10 xl:h-[146.5rem] lg:h-[135rem] md:h-[120.5rem] sm:h-[161.5rem] h-[143rem]'>
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