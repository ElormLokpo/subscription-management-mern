exports.errorMiddleware = async(err,req,res,next)=>{
    console.log('Middleware');

    console.log(err.errMessage);
    res.status(500).json({msg:err.errMessage});
    next();
}

