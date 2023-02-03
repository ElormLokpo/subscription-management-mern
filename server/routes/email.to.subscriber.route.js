const express = require('express');
const Router = express.Router();
const {emailToSubscribers} = require('../controllers/email.to.subscribers')
const {adminAuthorize} = require('../middleware/admin.auth');

Router.use(adminAuthorize);
Router.route('/send').post(emailToSubscribers);

module.exports = Router;