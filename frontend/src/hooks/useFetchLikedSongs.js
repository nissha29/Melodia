import { useRecoilState } from "recoil";
import { likedSongsState } from "../store/atoms/likedSongsState";
import URL from '../../constants.js'
import axios from "axios";

export function useFetchLikedSongs() {
    const [liked, setLiked] = useRecoilState(likedSongsState);
    async function fetchLikedSongs(){
        try{
            const response = await axios.get(
                `${URL}/api/interaction/likes`,
                {
                    withCredentials: true,
                }
            );
            if(JSON.stringify(liked)  != JSON.stringify(response.data.tracks)){
                setLiked(response.data.tracks)
            }
        }catch(error){
            console.log(error);
        }
    }
    return { fetchLikedSongs };
}