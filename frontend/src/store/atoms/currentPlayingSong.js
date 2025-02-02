import { atom, selector } from "recoil";
import { songsAtom } from "./Songs.js";
import {  defaultSong } from "../../utils/defaultSong.js";

const currentPlayingSongSelector = selector({
    key: 'currentPlayingSongSelector',
    get: ({get}) => {
        const songs = get(songsAtom);
        return {
            song: songs.length > 0 ? songs[0] : defaultSong,
            isPlaying: false
        };
    }
});

export const currentPlayingSong = atom({
    key: 'currentPlaying',
    default: {
        song: null,
        isPlaying: false
    },
    effects: [
        ({setSelf, getLoadable}) => {
            const initialSongLoadable = getLoadable(currentPlayingSongSelector);
            if (initialSongLoadable.state === 'hasValue') {
                setSelf(initialSongLoadable.contents);
            }
        }
    ]
})