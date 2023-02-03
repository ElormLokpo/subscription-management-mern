const SubscriptionModel = require('../models/subscription.model');
const ErrorHanlder = require('../utils/errHanlder');

exports.createSubscriptionsController = async (req,res,next)=>{
        try{

        const {contentName, contentDescription, owner} = req.body;
        const data = await SubscriptionModel.create({contentName,contentDescription, owner});

        if(contentName=='', contentDescription=='', owner==''){
            next(new ErrorHandler('Fields cannot be empty'))
        }
    
        res.status(200).json({success:true, data});
    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
    
}

exports.getSubscriptionsController = async (req,res,next)=>{
    try{
        const data = await SubscriptionModel.find();
        res.status(200).json({success:true, data});

    } catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}


exports.getSubscriptionController = async (req,res,next)=>{
    try{
        const data = await SubscriptionModel.findById(req.params.subsid);
        res.status(200).json({success:true, data});
    } catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}

exports.updateSubscriptionController = async (req,res,next)=>{
    try{
        const {contentName, contentDescription, owner} = req.body;
        const data = await SubscriptionModel.findByIdAndUpdate(req.params.subsid, {contentName, contentDescription, owner}, {new:true});
    
        res.status(200).json({success:true, data});
    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}

exports.deleteSubscriptionController = async (req,res,next)=>{
    try{
        const data = await SubscriptionModel.findByIdAndDelete(req.params.subsid);

        res.status(200).json({success:true, data});
    

    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
  
}