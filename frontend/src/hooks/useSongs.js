import { useRecoilState } from "recoil";
import axios from 'axios'
import URL from '../../constants.js'
import { songsAtom } from '../store/atoms/Songs.js'

export default function useSongs(){
    const [songs,setSongs] = useRecoilState(songsAtom);

    async function fetchSongs(){
      try {
        const response = await axios.get(
          `${URL}/api/track`,
          { withCredentials: true }
        )
        if(JSON.stringify(songs)  != JSON.stringify(response.data.tracks)){
          setSongs(response.data.tracks)
        }
      } catch(err) {
        console.log(err);
      }
    }
    return { fetchSongs};
  }