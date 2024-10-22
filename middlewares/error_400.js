const error_400 = (error,req,res,next) => {
    console.log(error)
    if(error.name = "bad Request"){
        return res.status(400).json({
            success:false,
            response:null,
            message: "Error"
    })
}
    next(error)
}

export default error_400