import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import Signup from '../pages/Signup.jsx'
import Signin from '../pages/Signin.jsx'
import Home from '../pages/Home.jsx'
import PublicRoute from './PublicRoute.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import HomeContent from '../components/HomeContent.jsx'
import LikedSongs from '../components/LikedSongs.jsx'
import Discover from '../components/Discover.jsx'
import Genre from '../components/Genre.jsx'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
        <Route path="/signin" element={
          <PublicRoute>
            <Signin />
          </PublicRoute>
        } />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
          <Route index element={<HomeContent />} />
          <Route path="liked" element={<LikedSongs />} />
          <Route path="discover" element={<Discover />} />
          <Route path="genre" element={<Genre />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routing