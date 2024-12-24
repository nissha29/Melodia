import userModal from "../../modals/user.modal.js";

export default async function userProfile(req,res){
    try{
        const userId = req.userId;

        const user = await userModal.findOne({
            _id: userId
        });
    
        return res.status(200).json({
            success: true,
            name: user.name,
            email: user.email,
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: `Error in userProfile EP, ${err}`
        })
    }
}