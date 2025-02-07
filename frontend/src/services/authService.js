import axios from "axios";
import Cookies from 'js-cookie';
import URL from '../../constants.js';

const AUTH_TOKEN_KEY = 'token';
const COOKIE_OPTIONS = {
    domain: 'melodia-grfx.onrender.com',
    path: '/',
    secure: true, 
    sameSite: 'strict', 
    expires: 7 
};

export const authService = {
    async checkAuth(setAuth) {
        const token = Cookies.get(AUTH_TOKEN_KEY);
        
        if (!token) {
            setAuth({
                isAuthenticated: false,
                user: null,
            });
            return;
        }

        try {
            axios.defaults.headers.common['authorization'] = token;
            
            const verifyResponse = await axios.get(`${URL}/api/user/verify-token`);
            
            if (verifyResponse.data.success) {
                try {
                    const userResponse = await axios.get(`${URL}/api/user/me`);
                    setAuth({
                        isAuthenticated: true,
                        user: {
                            name: userResponse.data.name,
                            email: userResponse.data.email,
                        },
                    });
                } catch (err) {
                    console.error('Error fetching user data:', err);
                    this.handleAuthError(setAuth);
                }
            }
        } catch (err) {
            console.error('Error validating token:', err);
            this.handleAuthError(setAuth);
        }
    },

    signIn(setAuth, response) {
        Cookies.set(AUTH_TOKEN_KEY, response.data.token, COOKIE_OPTIONS);
        
        axios.defaults.headers.common['authorization'] = response.data.token;
        
        setAuth({
            isAuthenticated: true,
            user: {
                name: response.data.name,
                email: response.data.email,
            },
        });
    },

    signOut(setAuth) {
        Cookies.remove(AUTH_TOKEN_KEY, COOKIE_OPTIONS);
        
        delete axios.defaults.headers.common['authorization'];
        
        setAuth({
            isAuthenticated: false,
            user: null,
        });
    },

    handleAuthError(setAuth) {
        Cookies.remove(AUTH_TOKEN_KEY, COOKIE_OPTIONS);
        delete axios.defaults.headers.common['authorization'];
        setAuth({
            isAuthenticated: false,
            user: null,
        });
    }
};