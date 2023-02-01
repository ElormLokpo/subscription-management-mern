const UserEmailModel = require('../models/user.emails');
const ErrorHanlder = require('../utils/errHanlder');

exports.createEmailsController = async (req,res,next)=>{
    try{
        const {email, subscription} = req.body;
        const data = await UserEmailModel.create({email,subscription});
    
        res.status(200).json({success:true, data});

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
   

}

exports.getEmailsController = async (req,res,next)=>{
    try{
        const data = await UserEmailModel.find();
        res.status(200).json({success:true, data});
    } catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
  

}
exports.getEmailController = async (req,res,next)=>{
    try{
        const data = await UserEmailModel.findById(req.params.emailid);
        res.status(200).json({success:true, data});
    } catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
   

}

exports.updateEmailController = async (req,res,next)=>{
    try{
        const {email, subscription} = req.body;
        const data = await UserEmailModel.findByIdAndUpdate(req.params.emailid, {email,subscription}, {new:true});
    
        res.status(200).json({success:true, data});

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
 

}

exports.deleteEmailController = async (req,res,next)=>{
    try{
        const data = await UserEmailModel.findByIdAndDelete(req.params.emailid);

        res.status(200).json({success:true, data});

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
  

}