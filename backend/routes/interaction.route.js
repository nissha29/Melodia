import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import createInteraction from "../controllers/track-interaction/createInteraction.controller.js";
import removeInteraction from "../controllers/track-interaction/removeInteraction.controller.js";
import getUserLikedTracks from "../controllers/track-interaction/getUserLikedTracks.controller.js";
import getUserFavoriteTracks from "../controllers/track-interaction/getUserFavoriteTracks.controller.js";

const interactionRouter = Router();

interactionRouter.post('/:trackId/:type', auth, createInteraction);
interactionRouter.delete('/:trackId/:type', auth, removeInteraction);
interactionRouter.get('/likes', auth, getUserLikedTracks);
interactionRouter.get('/favs', auth, getUserFavoriteTracks);

export default interactionRouter;