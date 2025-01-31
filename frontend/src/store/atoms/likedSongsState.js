import { atom } from "recoil";
import URL from '../../../constants.js';
import axios from "axios";

export const likedSongsState = atom({
    key: 'likedSongs',
    default: [],
    effects: [
        ({setSelf}) => {
            const fetchInitialData = async () => {
                try {
                    const response = await axios.get(
                        `${URL}/api/interaction/likes`,
                        {
                            withCredentials: true,
                        }
                    );
                    setSelf(response.data.tracks);
                } catch (err) {
                    console.log(err);
                    setSelf([]); 
                }
            };
            
            fetchInitialData();
        }
    ]
});