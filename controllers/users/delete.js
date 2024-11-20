import User from "../../models/User.js";

const deleteUser = async(req,res,next) => {
    try {
        let deleteUserOne = await User.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response:deleteUserOne
        })
    } catch (error) {
        next(error)
    }
}

const deleteMany = async(req,res,next) => {
    try {
        let deletealls = await User.deleteMany({
            _id: req.body._id
        })
        return res.status(200).json({
            response: deletealls
        })
        
    } catch (error) {
        
    }
}

export  {deleteUser, deleteMany}