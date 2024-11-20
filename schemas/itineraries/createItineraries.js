import joi from "joi-oid";


const schema = joi.object({
    name: joi.string().required(),
    photo: joi.string().required(),
    price: joi.string().required(),
    duration: joi.string().required(),
    likes: joi.string().required(),
    hashtags: joi.string().required(),
    city: joi.objectId().required()
})


export default schema