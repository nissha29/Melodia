import { Router } from 'express';
import addTrack from '../controllers/track-controller/addTrack.controller.js';
import deleteTrack from '../controllers/track-controller/deleteTrack.controller.js';
import updateTrack from '../controllers/track-controller/updateTrack.controller.js';
import getTracks from '../controllers/track-controller/getTracks.controller.js';

const trackRouter = Router()

trackRouter.post('/', addTrack);
trackRouter.delete('/:id', deleteTrack);
trackRouter.patch('/:id', updateTrack);
trackRouter.get('/', getTracks);