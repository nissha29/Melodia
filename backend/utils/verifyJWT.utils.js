import jwt from 'jsonwebtoken'

export default function verifyJWT(token, JWT_SECRET){
    try{
        const response = jwt.verify(token, JWT_SECRET);
        return response;
    }catch(err){
        console.log(`Error while verifiying token, ${err}`);
    }
}