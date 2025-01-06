import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import Signup from '../pages/Signup.jsx'
import Signin from '../pages/Signin.jsx'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            <Route path="/signup" element={ <Signup/> }/>
            <Route path="/signin" element={ <Signin/> }/>
        </Routes>
    </div>
  )
}

export default Routing