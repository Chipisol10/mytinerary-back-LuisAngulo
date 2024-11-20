import { Router } from "express";
import { allItineraries, getItinerariesCity, itinerariesById} from "../controllers/itineraries/readItineraries.js"
import { createItineraties } from "../controllers/itineraries/createItineraties.js"
import { updateItinerary } from "../controllers/itineraries/updateItineraties.js";
import { deleteI } from "../controllers/itineraries/deleteItineraties.js";
import passport from "passport";


const router = Router()

router.get ('/all',passport.authenticate('jwt',{session:false}),allItineraries)
router.get ('/city/:city',passport.authenticate('jwt',{session:false}),getItinerariesCity)
router.get ('/id/:id',passport.authenticate('jwt',{session:false}),itinerariesById)
 
router.post('/create',passport.authenticate('jwt',{session:false}),createItineraties)
router.put('/update',passport.authenticate('jwt',{session:false}),updateItinerary)
router.delete('/deleteI',passport.authenticate('jwt',{session:false}),deleteI)


export default router