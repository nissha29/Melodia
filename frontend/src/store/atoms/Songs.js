import { atom } from "recoil";
import axios from "axios";
import URL from '../../../constants.js'

export const songsAtom = atom({
    key: "songsAtom",
    default: [],
    effects: [
        ({setSelf}) => {
            async function fetchSongs(){
                try {
                  const response = await axios.get(
                    `${URL}/api/track`,
                    { withCredentials: true }
                  )
                  setSelf(response.data.tracks)
                } catch(err) {
                  console.log(err);
                  setSelf([]);
                }
              }
            fetchSongs();
        }
    ]
})