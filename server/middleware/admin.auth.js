const AdminModel = require('../models/admin.user');
const jwt = require('jsonwebtoken');


exports.adminAuthorize = async function(req,res,next){
    const {authorization} = req.headers;
    if(!authorization){
        throw Error('Token missing.')
    }
    let token = authorization.split(' ')[1];
    let {id} = await jwt.verify(token, process.env.JWT_SECRET);
    let {_id} = await AdminModel.findById(id);
    
    if(!_id){
        throw Error('You are not authorized to access this functionality ');
    }
    
    req.user = _id;
    
    next();
}