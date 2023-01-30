const SubscriptionModel = require('../models/subscription.model');

exports.createSubscriptionsController = async (req,res,next)=>{
    const {contentName, owner} = req.body;
    const data = await SubscriptionModel.create({contentName,contentDescription, owner});

    res.status(200).json({success:true, data});

}

exports.getSubscriptionsController = async (req,res,next)=>{ 
    const data = await SubscriptionModel.find();
    res.status(200).json({success:true, data});

}
exports.getSubscriptionController = async (req,res,next)=>{ 
    const data = await SubscriptionModel.findById(req.params.subsid);
    res.status(200).json({success:true, data});

}

exports.updateSubscriptionController = async (req,res,next)=>{
    const {contentName, owner} = req.body;
    const data = await SubscriptionModel.findByIdAndUpdate(req.params.subsid, {contentName, contentDescription, owner}, {new:true});

    res.status(200).json({success:true, data});

}

exports.deleteSubscriptionController = async (req,res,next)=>{
    const data = await SubscriptionModel.findByIdAndDelete(req.params.subsid);

    res.status(200).json({success:true, data});

}