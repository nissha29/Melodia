import trackModal from "../../modals/track.modal.js";
import mongoose from "mongoose";

export default async function deleteTrack(req,res){
    try{
        const userId =  req.userId;
        const { id } = req.params;
        if(! mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                success: false,
                message: 'Invalid Object id'
            })
        }
        const findTrack = await trackModal.findOne({
            _id: id, 
            userId: userId
        });

        if(! findTrack){
            return res.status(400).json({
                success: false,
                message: `No track found to delete or you are unauthorized`
            })
        }

        await trackModal.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: `Track deleted successfully`
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in delete track controller, ${err}`
        })
    }
}