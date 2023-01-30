const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/dbConfig');
const UserEmailRoutes = require('./routes/user.emails.routes');
const SubscriptionRoutes = require('./routes/subscription.routes');

dotenv.config({path: './config/.env'});


const app = express();
app.use(express.json());
app.use('/useremails', UserEmailRoutes);
app.use('/subscriptions', SubscriptionRoutes);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Sever running on PORT: ${PORT}`));