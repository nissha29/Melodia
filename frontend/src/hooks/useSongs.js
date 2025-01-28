import { useSetRecoilState } from "recoil";
import axios from 'axios'
import URL from '../../constants.js'
import { songsAtom } from '../store/atoms/Songs.js'

export default function useSongs(){
    const setSongs = useSetRecoilState(songsAtom);

    async function fetchSongs(){
      try {
        const response = await axios.get(
          `${URL}/api/track`,
          { withCredentials: true }
        )
        setSongs(response.data.tracks)
      } catch(err) {
        console.log(err);
      }
    }
    return { fetchSongs};
  }