import trackInteractionModal from "../../modals/trackInteraction.modal.js";

export default async function createInteraction(req,res){
    try{
        const userId = req.userId;
        const { trackId } = req.params;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }
        
        if (!trackId) {
            return res.status(400).json({
                success: false,
                message: 'TrackId is required'
            });
        }

        const existingInteraction = await trackInteractionModal.findOne({
            userId,
            trackId,
        });

        if (existingInteraction) {
            return res.status(400).json({
                success: false,
                message: `Track already liked`
            });
        }

        const interaction = new trackInteractionModal({
            userId,
            trackId,
        })

        await interaction.save();

        return res.status(200).json({
            success: true,
            message: "Added to liked songs",
            data: interaction,
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in create interaction EP, ${err}`
        })
    }
}