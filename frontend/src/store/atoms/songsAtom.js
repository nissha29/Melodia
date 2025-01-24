import { atom } from "recoil";

export const songsAtom = atom({
    key: "songsAtom",
    default: {
        songTitle: "",
        artistName: "",
        genre: "",
        track: "",
        image: "",
    }
})
