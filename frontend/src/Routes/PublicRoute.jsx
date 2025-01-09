import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { authState } from '../store/atoms/authState.js'
import { useNavigate } from 'react-router-dom';
import MusicLoader from '../components/MusicLoader.jsx';

function PublicRoute({ children }) {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  useEffect(()=>{
    if(auth.isAuthenticated){
        navigate('/home')
      }
  }, [auth.isAuthenticated,navigate])

//   if (auth.isLoading) {
//     return <MusicLoader/>
//   }

  return children
}

export default PublicRoute