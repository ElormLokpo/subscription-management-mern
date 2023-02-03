const express = require('express');
const Router = express.Router();
const {emailToSubscribers} = require('../controllers/email.to.subscribers')

Router.route('/send').post(emailToSubscribers);

module.exports = Router;