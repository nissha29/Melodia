import trackModal from "../../modals/track.modal.js";
import mongoose from "mongoose";
import getTrackDuration from "../../utils/getTrackDuration.js";

export default async function updateTrack(req,res){
    try{
        const userId = req.userId;
        const { id } = req.params;

        if(! mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                success: false,
                message: 'Invalid Object id'
            })
        }

        const existingTrack = await trackModal.findOne({
            _id: id,
            userId: userId
        });
        if(! existingTrack){
            return res.status(400).json({
                success: false,
                message: `No track found to update or you are unauthorized`,
            })
        }

        let updatedTrack = {
            songTitle: req.body?.songTitle || existingTrack.songTitle,
            artistName: req.body?.artistName || existingTrack.artistName,
            genre: req.body?.genre || existingTrack.genre
        };

        if (req.files) {
            
            if (req.files.track?.[0]) {
                const track = req.files.track[0];
                updatedTrack.trackUrl = track.path;
                updatedTrack.trackSize = track.size;
                updatedTrack.duration = await getTrackDuration(track);
            }

            if (req.files.image?.[0]) {
                const image = req.files.image[0];
                updatedTrack.imageUrl = image.path;
                updatedTrack.imageSize = image.size;
            }
        }

        await trackModal.findByIdAndUpdate(id, updatedTrack, { new : true });

        return res.status(200).json({
            success: true,
            message: `Track updated successfully`,
            track: updateTrack
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in update track controller, ${err}`
        })
    }
}