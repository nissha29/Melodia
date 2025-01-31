import { useSetRecoilState } from "recoil";
import { likedSongsState } from "../store/atoms/likedSongsState";
import URL from '../../constants.js'
import axios from "axios";

export function useFetchLikedSongs() {
    const setLikedSongs = useSetRecoilState(likedSongsState);
    async function fetchLikedSongs(){
        try{
            const response = await axios.get(
                `${URL}/api/interaction/likes`,
                {
                    withCredentials: true,
                }
            );
            setLikedSongs(response.data.tracks);
        }catch(error){
            console.log(error);
        }
    }
    return { fetchLikedSongs };
}