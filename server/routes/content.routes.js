const express = require('express');
const Router = express.Router();
const {
    getContentController,
    getContentsController,
    createContentsController,
    updateContentController,
    deleteContentController
} = require('../controllers/content.controller')
const {adminAuthorize} = require('../middleware/admin.auth');

Router.use(adminAuthorize);
Router.route('/').get(getContentsController);
Router.route('/create').post(createContentsController);
Router.route('/:subsid').get(getContentController).put(updateContentController).delete(deleteContentController);


module.exports = Router;