import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidadPassword from "../middlewares/isValidadPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";




const router = Router()

router.post('/signIn',accountNoExist,isValidadPassword,generateToken,signIn)
router.post('/signOut',passport.authenticate('jwt',{session:false}),signOut)

//Ruta para iniciar sesion con google
router.get(
    '/signIn/google',
    passportGoogle.authenticate('google',{session:false, scope: ['profile','email']})
)

router.get(
    '/signIn/google/callback',
    passportGoogle.authenticate('google',{session:false, failureRedirect: '/login'}),
        generateToken,
        signIn
   
)


export default router