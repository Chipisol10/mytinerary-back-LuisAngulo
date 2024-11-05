import City from "../../models/City.js";
import  "../../models/Itinerary.js";

let allCities =  async (req,res,next) => {
    try {
        let {name} = req.query 
        let query = {}
        if(name !=  "" && req.query.name){
            query.name = {$regex: '^'+name, $options: 'i'}
        }
        console.log(query);
        
       let all = await City.find(query)

        return res.status (200).json({
            response: all
        })
      
    } catch (error) {
       next(error)
    }
}

let citiesById = async (req, res) => {
    try {
        let cityQuery = req.params.id 
        let all = await City.findById(cityQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
        
    }
}


export  { allCities, citiesById }