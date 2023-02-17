const AdminModel = require('../models/admin.user');
const jwt = require('jsonwebtoken');
const ErrorHanlder = require('../utils/errHanlder');


exports.adminAuthorize = async function(req,res,next){
    const {authorization} = req.headers;
    if(!authorization){
        next(new ErrorHanlder('Token missing.'));
    }
    let token = authorization.split(' ')[1];
    console.log(token);
    let {id} = await jwt.verify(token, process.env.JWT_SECRET);
    let {_id} = await AdminModel.findById(id);
    
    if(!_id){
       next(new ErrorHanlder(500, 'User not authorized'))
    }
    
    req.user = _id;
    
    next();
}