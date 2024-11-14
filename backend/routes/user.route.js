import { Router } from "express"
import signup from '../controllers/signup.controller.js'

const userRouter = Router()

//signup endpoint
userRouter.post('/signup', signup)

export default userRouter