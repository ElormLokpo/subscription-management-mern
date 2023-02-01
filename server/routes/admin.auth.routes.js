const express = require("express");
const Router = express.Router();
const {
    registerAdminController,
    loginAdminController
} = require('../controllers/admin.controller');

Router.post('/register', registerAdminController);
Router.post('/login', loginAdminController);

module.exports = Router;