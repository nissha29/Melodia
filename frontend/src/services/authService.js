import axios from "axios";
import Cookies from 'js-cookie'
import URL from '../../constants.js'

const AUTH_TOKEN_KEY = 'token';

export const authService = {

    async checkAuth(setAuth){

        const token = Cookies.get(AUTH_TOKEN_KEY);

        if(! token){
            setAuth({
                isAuthenticated: false,
                user: null,
            })
            return;
        }

        try{
            const response = await axios.get(
                `${URL}/api/user/verify-token`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if(response.data.success){
                try{
                    const response = await axios.get(
                        `${URL}/api/user/me`,
                    );
                    setAuth({
                        isAuthenticated: true,
                        user: {
                            name: response.data.name,
                            email: response.data.email,
                        },
                    })
                }catch(err){
                    console.log(`error while fetching user data in authService, ${err}`)
                    Cookies.remove(AUTH_TOKEN_KEY);
                    setAuth({
                        isAuthenticated: false,
                        user: null,
                    })
                }
            }
        }catch(err){
            console.log(`error while validating token in authService, ${err}`)
            Cookies.remove(AUTH_TOKEN_KEY);
            setAuth({
                isAuthenticated: false,
                user: null,
            })
        }
    },

    signIn(setAuth, response){
        Cookies.set(AUTH_TOKEN_KEY, response.data.token);
        setAuth({
            isAuthenticated: true,
            user: {
                name: response.data.name,
                email: response.data.email,
            },
        })
    },

    signOut(setAuth){
        Cookies.remove(AUTH_TOKEN_KEY);
        setAuth({
            isAuthenticated: false,
            user: null,
        })
    }
}