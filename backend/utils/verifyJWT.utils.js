import jwt from 'jsonwebtoken'

export default function verifyJWT(token, JWT_SECRET){
    try{
        const response = jwt.verify(token, JWT_SECRET);
        return response;
    }catch(err){
        if (err.name === 'TokenExpiredError') {
            return res.json({
                message: `Error: Token is expired`
            })
        } else if (err.name === 'JsonWebTokenError') {
            return res.json({
                message: `Error: Invalid token or signature`
            })
        } else {
            return res.json({
                message: `Error: Token verification failed, ${err.message}`
            })
        }
    }
}