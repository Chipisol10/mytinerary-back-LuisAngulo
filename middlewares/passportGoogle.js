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
            console.log(profile);
            
           
            try {
                 //Buscar si el usuario esta en la Base Datos
            let user = await User.findOne({email: profile.emails[0].value})
            if (!user) {
                    //si no existe creo uno nuevo
                    user = new User ({
                        name:profile.displayName,
                        lastname:profile.displayLastName,
                        email:profile.emails[0].value,
                        password:profile.id,
                        url:profile.url[0].value,
                        country:profile.country[0].value
                        
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