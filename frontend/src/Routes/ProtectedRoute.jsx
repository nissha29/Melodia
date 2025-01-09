import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../store/atoms/authState.js'
import { useNavigate } from 'react-router-dom';
import MusicLoader from '../components/MusicLoader.jsx';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  useEffect(()=>{
    if(!auth.isAuthenticated){
        navigate('/signin')
      }
  }, [auth.isAuthenticated,navigate])

  if (auth.isLoading) {
    return <MusicLoader/>
  }

  return children
}

export default ProtectedRoute