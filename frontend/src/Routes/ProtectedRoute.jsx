import React from 'react'
import { useRecoilValue } from 'recoil'
import Cookies from 'js-cookie'
import { authState } from '../store/atoms/authState.js'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const auth = useRecoilValue(authState);
  const token = Cookies.get('token');

  if (!token && !auth.isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children
}

export default ProtectedRoute