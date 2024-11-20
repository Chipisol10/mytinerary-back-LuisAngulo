import joi from "joi-oid";


const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':'Please You must enter only letters',
        'string.alphanum':'Please do not enter special characters'
    }),
    photo: joi.string().required(),
    country: joi.string().required(),
    description: joi.string().required(),
    continent: joi.string().required(),
    currency: joi.string().required()
})

export default schema