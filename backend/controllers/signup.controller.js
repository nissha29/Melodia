import { z } from 'zod'
import bcrypt from 'bcrypt'
import userModel from '../models/user.model.js';
import generateJWT from '../utils/generateJWT.utils.js';

export default async function signup(req, res) {
    try {
        const { username, email, password } = req.body

        const requiredBody = z.object({
            username: z.string().min(3).max(100),
            email: z.string().min(10).max(100).email(),
            password: z.string()
                .min(8, { message: "Password must be at least 8 characters long" })
                .max(50, { message: "Password must be at most 50 characters long" })
                .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
                .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
                .regex(/\d/, { message: "Password must contain at least one number" })
                .regex(/[\W_]/, { message: "Password must contain at least one special character" })
        });

        const isParsedWithSuccess = requiredBody.safeParse(req.body)
        if (!isParsedWithSuccess.success) {
            return res.status(400).json({
                success: false,
                message: `invalid input format`
            })
        }


        const userExists = await userModel.findOne({
            email
        })

        if (userExists) {
            return res.status(400).json({
                success: false,
                mesaage: `User already exists`
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
        })
        const token = generateJWT(user._id, "15d")

        return res.status(201).json({
            success: true,
            message: `You are signed up`,
            token
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Server error in signup EP, ${err}`
        })
    }
}