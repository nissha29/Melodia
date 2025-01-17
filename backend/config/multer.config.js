import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    
    const isAudio = file.fieldname === 'track';
    
    return {
      folder: isAudio ? 'uploads/tracks' : 'uploads/images',
      resource_type: isAudio ? 'video' : 'image', 
      allowed_formats: isAudio ? ['mp3', 'wav', 'mpeg', 'x-wav', 'm4a', 'aac', 'mpeg3'] : ['jpg', 'jpeg', 'png', 'webp'],
      public_id: `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}`,
    };
  }
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'track') {

    const allowedAudioTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg'];
    if (allowedAudioTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid audio file type. Only MP3, WAV, and OGG files are allowed.'), false);
    }
  } else if (file.fieldname === 'image') {
    
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid image file type. Only JPEG, PNG, and GIF files are allowed.'), false);
    }
  } else {
    cb(new Error('Invalid field name'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 } 
});

export default upload;