import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (req, res, next) => {
    try {
        let itenarary = req.body
        await Itinerary.updateOne(
            {_id: itenarary._id},//condiciones de busqueda
            {name: itenarary.name} // modificaciones 
        )
        return res.status(200).json({
            response:itenarary
        })
    } catch (error) {
        next(error)
    }
}

export {updateItinerary}