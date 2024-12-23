import { parseFile } from 'music-metadata';

export default async function getTrackDuration(track){
    try{
        const metadata = await parseFile(track.path);
        return metadata.format.duration;
    }catch(err){
        console.error('Error getting track duration:', err);
        throw err;
    }
}