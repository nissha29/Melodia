import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { authState } from '../store/atoms/authState.js'
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService.js'

function PublicRoute({ children }) {
  const navigate = useNavigate();
  const [auth,setAuth] = useRecoilState(authState);
  useEffect(()=>{
    authService.checkAuth(setAuth);
  },[])
  
  useEffect(()=>{
    if(auth.isAuthenticated){
        navigate('/home')
      }
  }, [auth.isAuthenticated,navigate])

  return children
}

export default PublicRoute