const nodemailer = require('nodemailer');
const UserEmailModel = require('../models/user.emails');
const ContentModel = require('../models/content.model');
const {emailTemplate} = require('../utils/emailTemplate');

exports.emailToSubscribers = async (req, res, next)=>{
    const {titleMsg, bodyMsg, contentid} = req.body;
    const {_id} = await ContentModel.findOne({_id:contentid})

  
    let data = await UserEmailModel.find({content: _id}).select('email');
    console.log(data);

    let emailsToSend = [];
    
    if(data.length > 0 ){
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
        subject: 'Urgent Information',
        html: emailTemp
    })

    res.status(200).json({msg:'successs', emailsToSend, emails: emailsToSend});
    next();
    } else{
        res.status(200).json({msg:'No subscribers to content'});
    }
}