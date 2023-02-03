const nodemailer = require('nodemailer');
const UserEmailModel = require('../models/user.emails');
const SubscriptionModel = require('../models/subscription.model');
const {emailTemplate} = require('../utils/emailTemplate');

exports.emailToSubscribers = async (req, res, next)=>{
    const {subject,titleMsg, bodyMsg} = req.body;
    const {_id} = await SubscriptionModel.findOne({owner: req.user})


    const data = await UserEmailModel.find({subscription: _id}).select('email');

    let emailsToSend = [];
    
    for(let i=0; i< data.length; i++){
        let s = data[i].email;
        emailsToSend.push(s);
        
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
        to: emailsToSend,
        subject: subject,
        html: emailTemp
    })

    res.status(200).json({msg:'successs', emailsToSend, emails: emailsToSend});
}