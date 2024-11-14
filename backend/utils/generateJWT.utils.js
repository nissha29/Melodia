import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRET = process.env.JWT_SECRET

export default function generateJWT(id, expiresIn){
    try{
        const token = jwt.sign(
            { id },
            SECRET,
            { expiresIn }
        )
        return token
    }catch(err){
        console.log(`Error while generating JWT, ${err}`)
    }
}

