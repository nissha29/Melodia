import trackInteractionModal from "../../modals/trackInteraction.modal.js";

export default async function removeInteraction(){
    try{
        const userId =  req.userId;
        const { trackId, type } = req.params;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        if(!trackId || !type){
            return res.status(400).json({
                success: false,
                message: `TrackId is required`
            })
        }

        const doesInteractionExists = await trackInteractionModal.findOne({
            userId,
            trackId,
        })

        if(!doesInteractionExists){
            return res.status(400).json({
                success: false,
                message: `No entry exists to delete`
            })
        }

        await doesInteractionExists.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Removed from liked songs"
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in remove interaction EP, ${err}`
        })
    }
}