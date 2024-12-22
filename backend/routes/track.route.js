import { Router } from 'express';
import addTrack from '../controllers/track-controller/addTrack.controller.js';
import deleteTrack from '../controllers/track-controller/deleteTrack.controller.js';
import updateTrack from '../controllers/track-controller/updateTrack.controller.js';
import getTracks from '../controllers/track-controller/getTracks.controller.js';
import upload from '../config/multer.config.js';
import auth from '../middlewares/auth.middleware.js';

const trackRouter = Router()

trackRouter.post('/', auth, upload.fields([
    { name: 'track', maxCount: 1 }, 
    { name: 'image', maxCount: 1 }
]), addTrack);

trackRouter.delete('/:id', deleteTrack);
trackRouter.patch('/:id', updateTrack);
trackRouter.get('/', getTracks);


export default trackRouter;