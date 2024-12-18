import User from "../../models/User.js"

const singIn = async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email:req.body.email},
            {online: true}
        )
        console.log(req);
        
        return res.status(200).json({
            success:true,
            message:"signed In",
            user:{
                email:req.user.email,
                country:req.user.country,
                name:req.user.name,
                url:req.user.url,
                lastname:req.user.lastname,
                
                
            },
            token:req.token
        })
    } catch (error) {
        next(error)
    }
}

const validateToken = (req,res,next) => {
    return res.status(200).json({
        response: req.user
    })
}

export { singIn, validateToken}
