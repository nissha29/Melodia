export default function getTrackAndImagePath(req){
    try{
        const trackPath = req.files.track[0].path;
        const imagePath = req.files.image[0].path;
        return {
            trackPath,
            imagePath
        }
    }catch(err){
        throw new Error(`Failed to get track and image paths: ${err.message}`);
    }
}