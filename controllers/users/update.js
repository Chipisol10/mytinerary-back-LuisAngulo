import User from "../../models/User.js"

const update = async (req,res,next)=>{
    try {
        let user = req.body
        await User.updateOne(
            {_id: user._id},
            req.body
        )
          return res.status(200).json({
            response:user
        })
    } catch (error) {
        next(error)
    }
}

export {update}