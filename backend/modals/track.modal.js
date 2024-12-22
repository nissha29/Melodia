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
        trim: true,
        min: 2,
        maxLength: 200 
    },
    artistName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        maxLength: 200 
    },
    trackPath: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^uploads\/tracks\/.+\.(mp3|wav|m4a|aac)$/i.test(v);
            },
            message: 'Invalid track file path'
        }
    },
    trackUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/(?:localhost|[\w-]+(?:\.[\w-]+)+)(?::\d+)?\/uploads\/tracks\/[\w-]+\.(mp3|wav|m4a|aac)$/i.test(v);
            },
            message: 'Invalid track url'
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
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/(?:localhost|[\w-]+(?:\.[\w-]+)+)(?::\d+)?\/uploads\/images\/[\w-]+\.(?:jpg|jpeg|png)$/i.test(v);
            },
            message: 'Invalid image url'
        }
    },
    duration: {
        type: Number,  
        required: true,
        min: 0,
        max: 1200, 
        validate: {
            validator: function(v) {
                return v <= 1200;
            },
            message: 'Track duration cannot exceed 20 minutes'
        }
    },
    trackSize: {
        type: Number,  
        required: true,
        min: 0,
        max: 20 * 1024 * 1024
    },
    imageSize: {
        type: Number,  
        required: true,
        min: 0,
        max: 5 * 1024 * 1024
    },
}, {
    timestamps: true
});

const trackModel = mongoose.model('Track', trackSchema)
export default trackModel