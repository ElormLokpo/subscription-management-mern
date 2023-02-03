const nodemailer = require('nodemailer');
const UserEmailModel = require('../models/user.emails');
const {emailTemplate} = require('../utils/emailTemplate');

exports.emailToSubscribers = async (req, res, next)=>{
    const {subject,titleMsg, bodyMsg} = req.body;
    const data = await UserEmailModel.find().select('email');

    let arr = [];
    
    for(let i=0; i< data.length; i++){
        let s = data[i].email;
        arr.push(s);
        
    }

    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "ecb3de4270befa",
            pass: "c6f254fec0c9fb"
        }
    });

    let emailTemp = emailTemplate(titleMsg, bodyMsg)

    transporter.sendMail({
        from :'benedictdev@gmail.com',
        to: arr,
        subject: subject,
        html: emailTemp
    })

    res.status(200).json({msg:'successs', arr});
}