const SubscriptionModel = require('../models/content.model');
const ErrorHanlder = require('../utils/errHanlder');

exports.createContentsController = async (req,res,next)=>{
        try{

        const {contentName, contentDescription, owner} = req.body;
        const data = await SubscriptionModel.create({contentName,contentDescription, owner});

        if(contentName=='', contentDescription=='', owner==''){
            next(new ErrorHandler('Fields cannot be empty'))
        }
    
        res.status(200).json({success:true, data});
        next();
    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
    
}

exports.getContentsController = async (req,res,next)=>{
    try{
        let ownerId = req.query.id;
        const data = await SubscriptionModel.find({owner:ownerId});
        res.status(200).json({success:true, data});
        next();

    } catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}


exports.getContentController = async (req,res,next)=>{
    try{
        const data = await SubscriptionModel.findById(req.params.subsid);
        res.status(200).json({success:true, data});
        next();
    } catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}

exports.updateContentController = async (req,res,next)=>{
    try{
        const {contentName, contentDescription, owner} = req.body;
        const data = await SubscriptionModel.findByIdAndUpdate(req.params.subsid, {contentName, contentDescription, owner}, {new:true});
    
        res.status(200).json({success:true, data});
        next();
    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
   

}

exports.deleteContentController = async (req,res,next)=>{
    try{
        const data = await SubscriptionModel.findByIdAndDelete(req.params.subsid);

        res.status(200).json({success:true, data});
        next();

    }catch(error){
        next(new ErrorHanlder('Something went wrong'));
    }
  
}