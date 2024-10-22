const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success:false,
        message:` Path not found - Not Found - The request with method  ${req.method} with path ${req.url} `
    })
}

export default not_found_handler