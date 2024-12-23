import { Router } from 'express';
import addTrack from '../controllers/track-controller/addTrack.controller.js';
import deleteTrack from '../controllers/track-controller/deleteTrack.controller.js';
import updateTrack from '../controllers/track-controller/updateTrack.controller.js';
import getAllTracks from '../controllers/track-controller/getAllTracks.controller.js';
import getUserSpecificTracks from '../controllers/track-controller/getUserSpecificTracks.controller.js';
import upload from '../config/multer.config.js';
import auth from '../middlewares/auth.middleware.js';

const trackRouter = Router()

trackRouter.post('/', auth, upload.fields([
    { name: 'track', maxCount: 1 }, 
    { name: 'image', maxCount: 1 }
]), addTrack);

trackRouter.patch('/:id', auth, upload.fields([
    { name: 'track', maxCount: 1, optional: true },
    { name: 'image', maxCount: 1, optional: true }
]), updateTrack);

trackRouter.delete('/:id', auth, deleteTrack);
trackRouter.get('/', getAllTracks);
trackRouter.get('/my-tracks', auth, getUserSpecificTracks);


export default trackRouter;