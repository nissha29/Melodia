import axios from "axios";
import URL from '../../constants.js'
import { likeState } from "../store/atoms/likeState";
import { useSetRecoilState } from "recoil";
import { useFetchLikedSongs } from "./useFetchLikedSongs.js";

export function useHandleCreateInteraction(){
    const setLiked = useSetRecoilState(likeState);
    const { fetchLikedSongs } = useFetchLikedSongs();

    async function createInteraction(trackId){
        const id = trackId.$oid ? trackId.$oid : trackId;
        try{
            await axios.post(
                `${URL}/api/interaction/${id}`,
                {},
                {
                    withCredentials: true,
                }
            )
            setLiked((prev)=>[
                ...prev,
                trackId
            ]);
            fetchLikedSongs();
        }catch(err){
            console.log(err)
        }
    }
    return { createInteraction };
}