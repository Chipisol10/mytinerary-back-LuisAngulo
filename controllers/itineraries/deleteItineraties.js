import Itinerary from "../../models/Itinerary.js";

const deleteI = async (req, res, next) => {
    try {
        let deleteA = await Itinerary.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export {deleteI}