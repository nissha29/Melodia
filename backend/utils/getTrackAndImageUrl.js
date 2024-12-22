import dotenv from 'dotenv'
dotenv.config()

export default function getTrackAndImageUrl(req){
    try{
        const trackUrl = `${process.env.DOMAIN}/uploads/tracks/${req.files.track[0].filename}`;
        const imageUrl = `${process.env.DOMAIN}/uploads/images/${req.files.image[0].filename}`;
        return {
            trackUrl,
            imageUrl
        }
    }catch(err){
        throw new Error(`Failed to get track and image url: ${err.message}`);
    }
}