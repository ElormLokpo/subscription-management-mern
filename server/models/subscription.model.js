//This model handles subscriptions to a content

const mongoose = require('mongoose');


const SubscriptionSchema = mongoose.Schema({
    contentName:{
        type:String,
        required: true
    },
    contentDescription:String,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminModel'
    }
}, {timestamps: true})


module.exports = mongoose.model('SubscriptionModel', SubscriptionSchema);