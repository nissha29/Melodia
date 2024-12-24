import { Router } from "express"
import signup from '../controllers/auth-controller/signup.controller.js'
import signin from "../controllers/auth-controller/signin.controller.js";
import userProfile from '../controllers/auth-controller/userProfile.controller.js'
import auth from '../middlewares/auth.middleware.js';

const userRouter = Router()

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/me', auth, userProfile);

export default userRouter;