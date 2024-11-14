import { Router } from "express"
import signup from '../controllers/signup.controller.js'
import signin from "../controllers/signin.controller.js";

const userRouter = Router()

//signup endpoint
userRouter.post('/signup', signup);
userRouter.post('/signin', signin);


export default userRouter