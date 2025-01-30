import axios from "axios";
import URL from '../../constants.js'
import { likeState } from "../store/atoms/likeState";
import { useSetRecoilState } from "recoil";

export function useHandleCreateInteraction(){
    const setLiked = useSetRecoilState(likeState);

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
        }catch(err){
            console.log(err)
        }
    }
    return { createInteraction };
}