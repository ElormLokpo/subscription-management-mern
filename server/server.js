const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/dbConfig');
const UserEmailRoutes = require('./routes/user.emails.routes');
const ContentRoutes = require('./routes/content.routes');
const AdminAuthRoutes = require('./routes/admin.auth.routes');
const EmailToSubscribersRoutes = require('./routes/email.to.subscriber.route')
const {errorMiddleware} = require('./middleware/error.middleware');
const cors = require('cors');


dotenv.config({path: './config/.env'});


const app = express();
app.use(express.json());
app.use(cors());
app.use('/useremails', UserEmailRoutes);
app.use('/content', ContentRoutes);
app.use('/auth', AdminAuthRoutes);
app.use('/emailtosub', EmailToSubscribersRoutes)

app.use(errorMiddleware);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Sever running on PORT: ${PORT}`));