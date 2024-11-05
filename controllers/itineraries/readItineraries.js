import Itinerary from "../../models/Itinerary.js"
import  "../../models/City.js"


let allItineraries =  async (req,res,next) => {
    try {
        
    let all = await Itinerary.find()

        return res.status (200).json({
            response: all
        })
      
    } catch (error) {
       next(error)
    }
}

let getItinerariesCity =  async (req,res,next) => {
    try {
        
    let city = req.params.city
    let itineraries = await Itinerary.find({city})
        return res.status (200).json({
            response: itineraries
        })
      
    } catch (error) {
       next(error)
    }
}



let itinerariesById = async (req, res) => {
    try {
        let itinerariesQuery = req.params.id 
        let all = await Itinerary.findById(itinerariesQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
        
    }
}


export  { allItineraries, itinerariesById, getItinerariesCity }