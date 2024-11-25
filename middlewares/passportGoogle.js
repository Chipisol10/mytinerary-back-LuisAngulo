import passport from "passport"
import { Strategy as GoogleStragy } from "passport-google-oauth20"
import User from "../models/User.js"

export default passport.use(
    new GoogleStragy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK 
        },
        async(accessToken,refreshToken,profile, done) =>{
           // console.log(profile);
            
           
            try {
                 //Buscar si el usuario esta en la Base Datos
            let user = await User.findOne({email: profile.emails[0].value})
            if (!user) {
                    //si no existe creo uno nuevo
                    user = new User ({
                        name:profile.name.giveName,
                        lastname:profile.name.familyName,
                        email:profile.emails[0].value,
                        password:profile.id,
                        url:profile.photos[0].value,
                        country:null
                        
                        
                    })
                    await user.save()
                }
                return done(null,user)
                
            } catch (error) {
                return done (error,null)
            }

          
        }        
    )
)