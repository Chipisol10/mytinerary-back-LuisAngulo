import  { Router } from "express";
import {allUser, userByName, userById} from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import { update } from "../controllers/users/update.js";
import { deleteUser,deleteMany } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreated from "../schemas/users/create.js"
import accountExists from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";




const router = Router()

router.get('/all',passport.authenticate('jwt',{session:false}), allUser)
router.get('/name/:name',passport.authenticate('jwt',{session:false}),userByName)
router.get('/id/:id',passport.authenticate('jwt',{session:false}),userById)
router.post('/register',validator(schemaUsersCreated),accountExists,createHash,register)
router.put('/update',passport.authenticate('jwt',{session:false}),update)
router.delete('/deleteUserOne',passport.authenticate('jwt',{session:false}),deleteUser)
router.delete('/deletealls',passport.authenticate('jwt',{session:false}),deleteMany)

export default router