import { Router } from "express";
import { allCities, citiesById} from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js"
import { updateI } from "../controllers/cities/update.js";
import { deleteO } from "../controllers/cities/delete.js";
import passport from "passport";



const router = Router()

router.get ('/all',passport.authenticate('jwt',{session:false}),allCities)
router.get ('/id/:id',passport.authenticate('jwt',{session:false}) ,citiesById)
router.post('/create',passport.authenticate('jwt',{session:false}),create)
router.put('/updateI',passport.authenticate('jwt',{session:false}) ,updateI)
router.delete('/deleteO',passport.authenticate('jwt',{session:false}),deleteO)

export default router

