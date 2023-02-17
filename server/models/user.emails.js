//This model stores user emails for subscription of content

const mongoose = require('mongoose');

const UserEmailSchema = mongoose.Schema({
    email:{
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email'],
        required:true
    },
    content:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentModel'
    },
    isSubscribed:{
        type:Boolean,
        default: true
    }
}, {timestamps: true});



module.exports = mongoose.model('UserEmailModel', UserEmailSchema);