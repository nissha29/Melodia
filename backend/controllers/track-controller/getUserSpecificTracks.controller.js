import trackModal from '../../modals/track.modal.js'
export default async function getUserSpecificTracks(req,res){
    try{
        const userId = req.userId;
        const tracks = await trackModal.find({ userId });
        return res.status(200).json({
            success: true,
            message: `Tracks fetched successfully`,
            tracks: tracks
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in get user specific tracks controller, ${err}`
        })
    }
}