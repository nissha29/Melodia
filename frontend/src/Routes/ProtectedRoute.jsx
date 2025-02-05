import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Cookies from 'js-cookie'
import { authState } from '../store/atoms/authState.js'
import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService.js';

function ProtectedRoute({ children }) {
  const [auth,setAuth] = useRecoilState(authState);
  const token = Cookies.get('token');
  useEffect(()=>{
    authService.checkAuth(setAuth);
  },[])

  if (!token && !auth.isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children
}

export default ProtectedRoute