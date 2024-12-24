import trackInteractionModal from "../../modals/trackInteraction.modal";

export default async function createInteraction(){
    try{
        const userId = req.userId;
        const { trackId, type } = req.params;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }
        
        if (!trackId || !type) {
            return res.status(400).json({
                success: false,
                message: 'TrackId and type are required'
            });
        }

        const existingInteraction = await trackInteractionModal.findOne({
            userId,
            trackId,
            type
        });

        if (existingInteraction) {
            return res.status(400).json({
                success: false,
                message: `Track already ${type === 'like' ? 'liked' : 'favorited'}`
            });
        }

        const interaction = new trackInteractionModal({
            userId,
            trackId,
            type
        })

        await interaction.save();

        const messages = {
            like: 'Added to Liked tracks',
            favorite: 'Added to favorite tracks',
        };

        return res.status(200).json({
            success: true,
            message: messages[type],
            data: interaction,
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in create interaction EP, ${err}`
        })
    }
}