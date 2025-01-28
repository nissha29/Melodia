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
    trackUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/res\.cloudinary\.com\/.*\/video\/upload\/.*\.(mp3|wav|mpeg|x-wav|m4a|aac|mpeg3|webP)$/i.test(v);
            },
            message: 'Invalid Cloudinary track URL'
        }
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^https?:\/\/res\.cloudinary\.com\/.*\/image\/upload\/.*\.(jpg|jpeg|png|webp)$/i.test(v);
            },
            message: 'Invalid Cloudinary image URL'
        }
    },
    duration: {
        type: Number,
        required: true,
        min: 0,
        max: 3600,
        validate: {
            validator: function(v) {
                return v <= 3600;
            },
            message: 'Track duration cannot exceed 60 minutes'
        }
    },
    trackSize: {
        type: Number,
        required: true,
        min: 0,
        max: 60 * 1024 * 1024
    },
    imageSize: {
        type: Number,
        required: true,
        min: 0,
        max: 5 * 1024 * 1024
    },
    genre: {
        type: String,
        enum: ['Bollywood', 'Classical', 'Marathi', 'Folk', 'Ghazal', 'Bhajan', 'Bhojpuri','Indie Pop', 'Punjabi', 'Hindustani', 'Fusion','Regional Songs', 'Instrumental', 'Wedding Songs', 'Dance Numbers','Patriotic'],
        required: true,
    }
}, {
    timestamps: true
});

const Track = mongoose.model('Track', trackSchema);
export default Track;