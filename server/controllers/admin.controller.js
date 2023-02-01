const AdminModel = require('../models/admin.user');
const ErrorHanlder = require('../utils/errHanlder');


exports.registerAdminController = async (req,res,next)=>{
    try{
        const {fullname, email, password} = req.body;
        let emailExists = await AdminModel.findOne({email});
    
        if(emailExists){
           next(new ErrorHanlder('Email already exists'));
        }
        let data = await AdminModel.create({fullname, email, password});
    
        res.status(200).json({success:true, data});
    }catch(error){
        console.log(error);
        next(new ErrorHanlder('Something went wrong'));
    }
   
}


exports.loginAdminController = async (req,res,next)=>{
    try{
        const {email, password} = req.body;
        const emailFind = await AdminModel.findOne({email});
    
        const checkPassword = await emailFind.compPassword(password);
        const token = await emailFind.createToken();
        if(checkPassword){
            res.status(200).json({success:true, emailFind,token, msg:'Login successful'});
           
        }
        next(new ErrorHanlder('Wrong password'));
    
      
    }catch(error){
        console.log(error);
        next(new ErrorHanlder('Something went wrong'));
    }
   
    
}