const express = require('express');
const Router = express.Router();
const {
    getEmailController,
    getEmailsController,
    createEmailsController,
    updateEmailController,
    deleteEmailController
} = require('../controllers/user.emails.controller')

Router.route('/').get(getEmailsController);
Router.route('/create').post(createEmailsController);
Router.route('/:emailid').get(getEmailController).put(updateEmailController).delete(deleteEmailController);


module.exports = Router;