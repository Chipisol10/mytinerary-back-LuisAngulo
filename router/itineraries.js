import { Router } from "express";
import { allItineraries, getItinerariesCity, itinerariesById} from "../controllers/itineraries/readItineraries.js"
import { createItineraties } from "../controllers/itineraries/createItineraties.js"
import { updateItinerary } from "../controllers/itineraries/updateItineraties.js";
import { deleteI } from "../controllers/itineraries/deleteItineraties.js";
import passport from "passport";


const router = Router()

router.get ('/all',allItineraries)
router.get ('/city/:city',getItinerariesCity)
router.get ('/id/:id',itinerariesById)
 
router.post('/create',createItineraties)
router.put('/update',updateItinerary)
router.delete('/deleteI',deleteI)


export default router