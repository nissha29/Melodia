import { useSetRecoilState } from "recoil";
import { myTracksState } from "../store/atoms/myTracksState";
import URL from '../../constants.js'
import axios from "axios";

export function useFetchMyTracks() {
    const setMyTracks = useSetRecoilState(myTracksState);
    async function fetchMyTracks(){
        try{
            const response = await axios.get(
                `${URL}/api/track/my-tracks`,
                {
                    withCredentials: true,
                }
            );
            setMyTracks(response.data.tracks);
        }catch(error){
            console.log(error);
        }
    }
    return { fetchMyTracks };
}