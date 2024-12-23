import trackModal from '../../modals/track.modal.js'
export default async function getAllTracks(req,res){
    try{
        const tracks = await trackModal.find({});
        return res.status(200).json({
            success: true,
            message: `Tracks fetched successfully`,
            tracks: tracks
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in get all tracks controller, ${err}`
        })
    }
}