const mongoose = require('mongoose');

const connectDB = async ()=>{
    const db = await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true});
    console.log('Database connected successfully');
}


module.exports = connectDB;