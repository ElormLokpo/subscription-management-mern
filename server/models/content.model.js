//This model handles subscriptions to a content

const mongoose = require('mongoose');


const ContentSchema = mongoose.Schema({
    contentName:{
        type:String,
        required: true
    },
    contentDescription:String,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminModel',
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('ContentModel', ContentSchema);