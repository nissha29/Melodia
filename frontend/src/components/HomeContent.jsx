import React from 'react'
import HomeHeroBanner from './HomeHeroBanner'
import Songs from './Songs'

export default function HomeContent() {
  return (
    <div className='flex flex-col overflow-y-scroll scrollbar-none'>
        <HomeHeroBanner />
        <Songs/>
    </div>
  )
}
