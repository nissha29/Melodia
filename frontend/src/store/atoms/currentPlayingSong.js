import { atom } from "recoil";
import { defaultSong } from '../../utils/defaultSong.js'

export const currentPlayingSong = atom({
    key: 'currentPlaying',
    default: {
        song: defaultSong,
        isPlaying: false
    }
})