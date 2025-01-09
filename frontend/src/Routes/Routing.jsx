import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import Signup from '../pages/Signup.jsx'
import Signin from '../pages/Signin.jsx'
import Home from '../pages/Home.jsx'
import PublicRoute from './PublicRoute.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={ 
              <PublicRoute>
                <LandingPage/> 
              </PublicRoute>
            }/>
            <Route path="/signup" element={ 
              <PublicRoute>
                <Signup/> 
              </PublicRoute>
            }/>
            <Route path="/signin" element={ 
              <PublicRoute>
                <Signin/> 
              </PublicRoute>
            }/>
            <Route path="/home" element={ 
              <ProtectedRoute>
                <Home/> 
              </ProtectedRoute>
            }/>
        </Routes>
    </div>
  )
}

export default Routing