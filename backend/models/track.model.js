import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
    songTitle: {
        type: String,
        required: true,
        trim: true
    },
    artistName: {
        type: String,
        required: true,
        trim: true
    },
    trackUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\.(mp3|wav|m4a|aac)$/i.test(v);
            },
            message: 'Invalid audio file URL'
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i.test(v);
            },
            message: 'Invalid image URL'
        }
    },
    duration: {
        type: Number,  
        required: true
    },
    fileSize: {
        type: Number,  
        required: true
    }
}, {
    timestamps: true
});

const trackModel = mongoose.model('Track', trackSchema)
export default trackModel