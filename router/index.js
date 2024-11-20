import { Router } from "express";
import usersRouter from './users.js';
import citiesRouter from './cities.js'
import itinerariesRouter from './itineraries.js'
import auth from './auth.js'

const router = Router()
router.use('/users',usersRouter),
router.use('/cities', citiesRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/auth',auth)
export default router