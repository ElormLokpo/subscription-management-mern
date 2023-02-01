const express = require('express');
const Router = express.Router();
const {
    getSubscriptionController,
    getSubscriptionsController,
    createSubscriptionsController,
    updateSubscriptionController,
    deleteSubscriptionController
} = require('../controllers/subscription.controller')
const {adminAuthorize} = require('../middleware/admin.auth');

Router.use(adminAuthorize);
Router.route('/').get(getSubscriptionsController);
Router.route('/create').post(createSubscriptionsController);
Router.route('/:subsid').get(getSubscriptionController).put(updateSubscriptionController).delete(deleteSubscriptionController);


module.exports = Router;