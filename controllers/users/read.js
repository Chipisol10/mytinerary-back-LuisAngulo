import User from "../../models/User.js"
// me falta un import //

let allUser = async (req,res,next)=> {
    try {
        let {name} = req.query 
        let query = {}
        if(name){
            query.name = {$regex: '^'+name, $options: 'i'}
        }

        let all = await User.find()
        return res.status(200).json({
            response:all
        })
    } catch (error){
        return res.status(500).json({
            response:error
        })
    }
}

let userByName = async (req,res)=> {
    try {
        let name = req.params.name
        let all = await User.find({name: name})
        return res.status(200).json({
            response:all
        })
    } catch (error){
        return res.status(500).json({
            response:error
        })
    }
}

let userById = async (req,res)=> {
    try {
        let id = req.params.id
        let all = await User.findById( id )
        return res.status(200).json({
            response:all
        })
    } catch (error){
        return res.status(500).json({
            response:error
        })
    }
}

export {allUser, userByName, userById} 