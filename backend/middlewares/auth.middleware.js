import verifyJWT from "../utils/verifyJWT.utils.js"

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
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ 
                success: false,
                message: "Token has expired. Please log in again." 
            });
        }
        if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ 
                success: false,
                message: "Invalid token. You are unauthorized." 
            });
        }
        return res.status(500).json({ 
            success: false,
            message: 'Server error during authentication', error: `${err}` 
        })
    }
}