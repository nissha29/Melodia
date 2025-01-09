import verifyJWT from "../../utils/verifyJWT.utils.js"
export default async function verifyToken(req,res){
    try{
        const token = req.headers.authorization;
        const response = verifyJWT(token, process.env.JWT_SECRET);
        return res.status(200).json({
            success: true,
            message: `Token is valid`,
            response
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Invalid token provided`
        })
    }
}