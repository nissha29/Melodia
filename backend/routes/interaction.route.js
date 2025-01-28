import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import createInteraction from "../controllers/track-interaction/createInteraction.controller.js";
import removeInteraction from "../controllers/track-interaction/removeInteraction.controller.js";
import getUserLikedTracks from "../controllers/track-interaction/getUserLikedTracks.controller.js";

const interactionRouter = Router();

interactionRouter.post('/:trackId', auth, createInteraction);
interactionRouter.delete('/:trackId', auth, removeInteraction);
interactionRouter.get('/likes', auth, getUserLikedTracks);

export default interactionRouter;