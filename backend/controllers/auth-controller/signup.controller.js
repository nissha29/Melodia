import { z } from 'zod'
import bcrypt from 'bcrypt'
import userModel from '../../modals/user.modal.js';
import generateJWT from '../../utils/generateJWT.utils.js';

export default async function signup(req, res) {
    try {
        const { name, email, password } = req.body

        const requiredBody = z.object({
            name: z.string().min(3).max(100),
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
                message: `invalid input format, ${isParsedWithSuccess.error}`
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
            name,
            email,
            password: hashedPassword,
        })
        const token = generateJWT(user._id, "15d")

        const cookieOptions = {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            sameSite: 'none',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            domain: process.env.NODE_ENV === 'production' ? '' : 'localhost',
            path: '/',
        };

        return res
        .cookie('token', token, cookieOptions)
        .status(201)
        .json({
            success: true,
            message: `You are signed up`,
            token: token,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Server error in signup EP, ${err}`
        })
    }
}