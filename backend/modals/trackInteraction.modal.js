import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    trackId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Track',
        required: true,
    },
},{
    timestamps: true,
})

const trackInteractionModal = mongoose.model('Track-Interaction', interactionSchema);
export default trackInteractionModal;