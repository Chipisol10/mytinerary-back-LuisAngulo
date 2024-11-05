import City from "../../models/City.js";

const updateI = async (req, res, next) => {
    try {
        let city = req.body
        await City.updateOne(
            {_id: city._id},//condiciones de busqueda
            {name: city.name} // modificaciones 
        )
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        next(error)
    }
}

export {updateI}