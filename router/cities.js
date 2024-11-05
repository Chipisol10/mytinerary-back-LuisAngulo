import { Router } from "express";
import { allCities, citiesById} from "../controllers/cities/read.js";
import { create } from "../controllers/cities/create.js"
import { update } from "../controllers/cities/update.js";
import { deleteO } from "../controllers/cities/delete.js";
const router = Router()

router.get ('/all', allCities)
router.get ('/id/:id', citiesById)
router.post('/create', create)
router.put('/update', update)
router.delete('/deleteO',deleteO)

export default router

