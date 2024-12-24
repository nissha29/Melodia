import trackInteractionModal from "../../modals/trackInteraction.modal";

export default async function getUserLikedTracks(req,res){
    try{
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        const likedTracks = await trackInteractionModal.find({
            userId,
            type: 'like'
        })
        .populate({
            path: 'trackId',
            select: 'songTitle artistName trackUrl imageUrl duration',
        })
        .sort({ 
            createdAt: -1 
        });

        const tracks = likedTracks
            .filter(interaction => interaction.trackId)
            .map(interaction => ({
                id: interaction.trackId._id,
                title: interaction.trackId.songTitle,
                artist: interaction.trackId.artistName,
                duration: interaction.trackId.duration,
                trackUrl: interaction.trackId.trackUrl,
                imageUrl: interaction.trackId.imageUrl,
                interactionId: interaction._id,
                interactedAt: interaction.createdAt
            }));
            
        return res.status(200).json({
            success: true,
            tracks
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in get user liked tracks EP, ${err}`
        })
    }
}