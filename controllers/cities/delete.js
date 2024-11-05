import City from "../../models/City.js";

const deleteO = async (req, res, next) => {
    try {
        let deleteA = await City.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export {deleteO}