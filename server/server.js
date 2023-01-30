const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/dbConfig');

dotenv.config({path: './config/.env'});


const app = express();


connectDB();

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Sever running on PORT: ${PORT}`));