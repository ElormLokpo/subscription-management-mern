const AdminModel = require('../models/admin.user');


exports.registerAdminController = async (req,res,next)=>{
    const {fullname, email, password} = req.body;
    const data = await AdminModel.create({fullname, email, password});

    res.status(200).json({success:true, data});
}