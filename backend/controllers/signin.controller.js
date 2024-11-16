import { z } from 'zod';
import bcrypt from 'bcrypt';
import userModel from '../models/user.model.js';
import generateJWT from '../utils/generateJWT.utils.js';

export default async function signin(req, res) {
  try {
    const { username, password, email } = req.body;

    const requiredBody = z.object({
      username: z.string().min(3).max(100),
      password: z.string().min(8).max(50),
      email: z.string().min(10).max(100).email(),
    });

    const isParsedWithSuccess = requiredBody.safeParse(req.body);
    if (!isParsedWithSuccess.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid input format"
      });
    }


    const user = await userModel.findOne({ username, email });
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

    return res.status(200).json({
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
