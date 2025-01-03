import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection.jsx'

function LandingPage() {
  return (
    <div>
        <div className='pt-10'>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
        </div>
    </div>
  )
}

export default LandingPage