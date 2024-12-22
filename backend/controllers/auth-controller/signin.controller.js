import { z } from 'zod';
import bcrypt from 'bcrypt';
import userModel from '../../modals/user.modal.js';
import generateJWT from '../../utils/generateJWT.utils.js';

export default async function signin(req, res) {
  try {
    const { email, password } = req.body;

    const requiredBody = z.object({
      email: z.string().min(10).max(100).email(),
      password: z.string().min(8).max(50),
    });

    const isParsedWithSuccess = requiredBody.safeParse(req.body);
    if (!isParsedWithSuccess.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid input format"
      });
    }


    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist"
      });
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password"
      });
    }

    const token = generateJWT(user._id, "15d");

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
    .status(200)
    .json({
      success: true,
      message: "You are signed in",
      token
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Server error in signin EP, ${err}`
    });
  }
}
