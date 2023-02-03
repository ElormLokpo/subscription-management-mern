exports.errorMiddleware = async(err,req,res,next)=>{
   
    res.status(500).json({msg:err.errMessage});
    next();
}

