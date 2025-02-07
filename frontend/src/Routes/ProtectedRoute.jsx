import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { authState } from '../store/atoms/authState.js';
import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService.js';

function ProtectedRoute({ children }) {
    const [auth, setAuth] = useRecoilState(authState);
    
    // Be explicit about cookie options when getting the token
    const token = Cookies.get('token', {
        domain: 'melodia-grfx.onrender.com',
        path: '/'
    });
    
    // Add debugging logs
    console.log('All cookies:', Cookies.get());
    console.log('Token:', token);
    console.log('Auth state:', auth);
    
    useEffect(() => {
        // Check auth on mount
        if (!auth.isAuthenticated && token) {
            authService.checkAuth(setAuth);
        }
    }, []);

    if (!auth.isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

export default ProtectedRoute;