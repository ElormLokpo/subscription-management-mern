const express = require('express');
const Router = express.Router();
const {
    getEmailController,
    getEmailsController,
    createEmailsController,
    updateEmailController,
    deleteEmailController
} = require('../controllers/user.emails.controller');
const { adminAuthorize } = require('../middleware/admin.auth')

Router.route('/').get(adminAuthorize, getEmailsController);
Router.route('/create').post(createEmailsController);
Router.route('/:emailid').get(getEmailController).put(adminAuthorize,updateEmailController).delete(adminAuthorize, deleteEmailController);


module.exports = Router;