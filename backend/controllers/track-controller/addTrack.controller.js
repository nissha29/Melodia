import trackValidation from "../../utils/trackValidation.utils.js";
import trackModal from "../../modals/track.modal.js";
import getTrackDuration from "../../utils/getTrackDuration.js";

export default async function addTrack(req,res){
    try{
        if(!req.files || !req.files.track || !req.files.image){
            return res.status(400).json({
                success: false,
                message: `Both track and image are required`
            })
        }

        const userId = req.userId;
        const { songTitle, artistName } = req.body;
        const track = req.files.track[0];
        const image = req.files.image[0];

        const isParsedWithSuccess = trackValidation.safeParse({
            songTitle, artistName, track, image
        });
        if(!isParsedWithSuccess.success){
            return res.status(400).json({
                success: false,
                message: `Please Provide input in valid format, ${isParsedWithSuccess.error}`,
            })
        }

        const trackPath = track.path;
        const imagePath = image.path;
        const trackUrl = `${process.env.DOMAIN}/uploads/tracks/${track.filename}`;
        const imageUrl = `${process.env.DOMAIN}/uploads/images/${image.filename}`;
        const duration = await getTrackDuration(track);
        const trackSize = track.size;
        const imageSize = image.size;

        const newTrack = new trackModal({
            userId,
            songTitle,
            artistName,
            trackPath,
            trackUrl,
            imagePath,
            imageUrl,
            duration,
            trackSize,
            imageSize,
        })

        await newTrack.save();

        res.json({
            success: true,
            message: 'Track added successfully',
        });
        
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in add track controller, ${err}`
        })
    }
}