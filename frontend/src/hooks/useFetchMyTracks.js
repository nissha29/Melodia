import { useRecoilState } from "recoil";
import { myTracksState } from "../store/atoms/myTracksState";
import URL from '../../constants.js'
import axios from "axios";

export function useFetchMyTracks() {
    const [myTracks,setMyTracks] = useRecoilState(myTracksState);
    async function fetchMyTracks(){
        try{
            const response = await axios.get(
                `${URL}/api/track/my-tracks`,
                {
                    withCredentials: true,
                }
            );
            if(JSON.stringify(myTracks)  != JSON.stringify(response.data.tracks)){
                setMyTracks(response.data.tracks)
            }
        }catch(error){
            console.log(error);
        }
    }
    return { fetchMyTracks };
}