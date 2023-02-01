//This model stores admin user details
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


const AdminSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email'],
        required:true
    },
    password:{
        type: String,
        min: [8, 'Password should be at least 8 characters long']
    }
},{timestamps:true})



AdminSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.compPassword = async function(password){
    const validPassword = await bcrypt.compare(password, this.password);
   
    return validPassword;
}

AdminSchema.methods.createToken = async function(){
    const token = await jsonwebtoken.sign({id:this._id},process.env.JWT_SECRET, {expiresIn:30});
    return token;
}



module.exports = mongoose.model('AdminModel', AdminSchema);