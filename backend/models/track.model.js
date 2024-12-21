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
    trackPath: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^uploads\/tracks\/.+\.(mp3|wav|m4a|aac)$/i.test(v);
            },
            message: 'Invalid audio file path'
        }
    },
    imagePath: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^uploads\/images\/.+\.(jpg|jpeg|png|webp)$/i.test(v);
            },
            message: 'Invalid image file path'
        }
    },
    duration: {
        type: Number,  
        required: true
    },
    fileSize: {
        type: Number,  
        required: true,
        max: 20 * 1024 * 1024
    }
}, {
    timestamps: true
});

const trackModel = mongoose.model('Track', trackSchema)
export default trackModel