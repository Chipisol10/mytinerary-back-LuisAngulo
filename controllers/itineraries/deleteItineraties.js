import Itinerary from "../../models/Itinerary.js";

const deleteI = async (req, res, next) => {
    try {
        let deleteA = await Itinerary.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response: deleteA
        })
    } catch (error) {
        next(error)
    }
}

export {deleteI}