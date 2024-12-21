import verifyJWT from "../utils/verifyJWT.utils"

export default function auth(req,res,next){
    try{
        const token = req.cookies.token;
        
        if(! token){
            console.log(`No token provided`);
        }

        const response = verifyJWT(token, process.env.JWT_SECRET);
        req.userId = response.id;
        next();
    }catch(err){
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ 
                message: 'You are unauthorized, invalid token'
            })
        }
        return res.status(500).json({ 
            message: 'Server error during authentication', error: `${err}` 
        })
    }
}