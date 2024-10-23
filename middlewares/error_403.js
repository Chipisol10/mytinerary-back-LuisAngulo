const error_403 = (error,req,res,next) => {
    console.log(error)
    if(error.name = "Forbidden"){
        return res.status(403).json({
            success:false,
            response:null,
            message: "Error"
    })
}
    next(error)
}

export default error_403