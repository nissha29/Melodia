import { parseBuffer } from 'music-metadata';
import fetch from 'node-fetch';

export default async function getTrackDuration(track) {
    try {
        const response = await fetch(track.path);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch track: ${response.statusText}`);
        }
        
        const buffer = await response.arrayBuffer();
        const metadata = await parseBuffer(Buffer.from(buffer));
        return metadata.format.duration;
    } catch (err) {
        console.error('Error getting track duration:', err);
        throw err;
    }
}