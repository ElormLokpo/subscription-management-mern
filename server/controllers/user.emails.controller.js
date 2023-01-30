const UserEmailModel = require('../models/user.emails');

exports.createEmailsController = async (req,res,next)=>{
    const {email, subscription} = req.body;
    const data = await UserEmailModel.create({email,subscription});

    res.status(200).json({success:true, data});

}

exports.getEmailsController = async (req,res,next)=>{ 
    const data = await UserEmailModel.find();
    res.status(200).json({success:true, data});

}
exports.getEmailController = async (req,res,next)=>{ 
    const data = await UserEmailModel.findById(req.params.emailid);
    res.status(200).json({success:true, data});

}

exports.updateEmailController = async (req,res,next)=>{
    const {email, subscription} = req.body;
    const data = await UserEmailModel.findByIdAndUpdate(req.params.emailid, {email,subscription}, {new:true});

    res.status(200).json({success:true, data});

}

exports.deleteEmailController = async (req,res,next)=>{
    const data = await UserEmailModel.findByIdAndDelete(req.params.emailid);

    res.status(200).json({success:true, data});

}