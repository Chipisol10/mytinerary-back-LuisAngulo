import { Router } from "express";
import { allCities, citiesById} from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js"
const router = Router()

router.get ('/all', allCities)
router.get ('/id/:id', citiesById)
router.post('/create', create)

export default router

