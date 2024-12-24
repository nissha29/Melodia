import trackInteractionModal from "../../modals/trackInteraction.modal";

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
                message: `Both trackId and type are required`
            })
        }

        const doesInteractionExists = await trackInteractionModal.findOne({
            userId,
            trackId,
            type
        })

        if(!doesInteractionExists){
            return res.status(400).json({
                success: false,
                message: `No entry exists to delete`
            })
        }

        await doesInteractionExists.deleteOne();

        const messages = {
            like: 'Removed from Liked tracks',
            favorite: 'Removed from favorite tracks',
        };

        return res.status(200).json({
            success: true,
            message: messages[type]
        });

    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in remove interaction EP, ${err}`
        })
    }
}