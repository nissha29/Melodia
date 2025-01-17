import trackValidation from "../../utils/trackValidation.utils.js";
import Track from "../../modals/track.modal.js";
import getTrackDuration from "../../utils/getTrackDuration.js";

export default async function addTrack(req, res) {
    try {
        if (!req.files || !req.files.track || !req.files.image) {
            return res.status(400).json({
                success: false,
                message: `Both track and image are required`
            });
        }

        const userId = req.userId;
        const { songTitle, artistName, genre } = req.body;
        
        const track = req.files.track[0];
        const image = req.files.image[0];

        const isParsedWithSuccess = trackValidation.safeParse({
            songTitle, artistName, genre, track, image
        });

        if (!isParsedWithSuccess.success) {
            return res.status(400).json({
                success: false,
                message: `Please Provide input in valid format, ${isParsedWithSuccess.error}`,
            });
        }

        const duration = await getTrackDuration(track);

        const newTrack = new Track({
            userId,
            songTitle,
            artistName,
            
            trackUrl: track?.path, 
            imageUrl: image?.path, 
            duration,
            trackSize: track?.size,
            imageSize: image?.size,
            genre
        });

        await newTrack.save();

        res.json({
            success: true,
            message: 'Track added successfully',
            track: {
                id: newTrack._id,
                songTitle: newTrack.songTitle,
                artistName: newTrack.artistName,
                trackUrl: newTrack.trackUrl,
                imageUrl: newTrack.imageUrl,
                genre: newTrack.genre
            }
        });

    } catch (err) {
        console.error('Error in add track controller:', err);
        return res.status(500).json({
            success: false,
            message: `Error in add track controller, ${err.message}`
        });
    }
}