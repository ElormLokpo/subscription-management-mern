const AdminModel = require('../models/admin.user');


exports.registerAdminController = async (req,res,next)=>{
    const {fullname, email, password} = req.body;
    let emailExists = await AdminModel.findOne({email});

    if(emailExists){
        throw Error('Email already exists');
    }
    let data = await AdminModel.create({fullname, email, password});

    res.status(200).json({success:true, data});
}


exports.loginAdminController = async (req,res,next)=>{
    const {email, password} = req.body;
    const emailFind = await AdminModel.findOne({email});

    const checkPassword = await emailFind.compPassword(password);
    const token = await emailFind.createToken();
    if(!checkPassword){
        throw Error('Wrong password');
    }

    res.status(200).json({success:true, emailFind,token, msg:'Login successful'});
    
}