export default function getTrackAndImageSize(req){
    try{
        const trackSize = req.files.track[0].size;
        const imageSize = req.files.image[0].size;
        return {
            trackSize,
            imageSize
        }
    }catch(err){
        throw new Error(`Failed to get track and image size: ${err.message}`);
    }
}