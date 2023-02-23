const UserEmailModel = require('../models/user.emails');
const ErrorHanlder = require('../utils/errHanlder');

exports.createEmailsController = async (req,res,next)=>{
    try{
        const {email, content} = req.body;
        const data = await UserEmailModel.create({email,content});
    
        res.status(200).json({success:true, data});
        next();

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
   

}

exports.getEmailsController = async (req,res,next)=>{
    try{
        const {content} = req.query;
        const data = await UserEmailModel.find({content});
        res.status(200).json({success:true, data});
    } catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
  

}
exports.getEmailController = async (req,res,next)=>{
    try{
        const data = await UserEmailModel.findById(req.params.emailid);
        res.status(200).json({success:true, data});
        next();
    } catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
   

}

exports.updateEmailController = async (req,res,next)=>{
    try{
        const {email, content} = req.body;
        const data = await UserEmailModel.findByIdAndUpdate(req.params.emailid, {email,content}, {new:true});
    
        res.status(200).json({success:true, data});
        next();

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
 

}

exports.deleteEmailController = async (req,res,next)=>{
    try{
        const data = await UserEmailModel.findByIdAndDelete(req.params.emailid);

        res.status(200).json({success:true, data});
        next();

    }catch(error){
        next(new ErrorHanlder('Something went wrong'))
    }
  

}