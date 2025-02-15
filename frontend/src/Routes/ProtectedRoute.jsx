import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';
import { authState } from '../store/atoms/authState.js';
import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService.js';

function ProtectedRoute({ children }) {
    const [auth, setAuth] = useRecoilState(authState);
    
    const token = Cookies.get('token', {
        domain: 'melodia-grfx.onrender.com',
        path: '/'
    });
    
    useEffect(() => {
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