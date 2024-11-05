import City from "../../models/City.js";

const update = async (req, res, next) => {
    try {
        let city = req.body
        await City.updateOne(
            {_id: city._id},//condiciones de busqueda
            {city: city.name} // modificaciones 
        )
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error)
    }
}

export {update}