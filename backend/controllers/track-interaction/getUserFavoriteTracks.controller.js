export default async function getUserFavoriteTracks(req,res){
    try{
        const userId = req.userId;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        const favoriteTracks = await trackInteractionModal.find({
            userId,
            type: 'favorite'
        })
        .populate({
            path: 'trackId',
            select: 'songTitle artistName trackUrl imageUrl duration',
        })
        .sort({ 
            createdAt: -1 
        });

        const tracks = favoriteTracks
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
            message: `Error in get user favorite tracks EP, ${err}`
        })
    }
}