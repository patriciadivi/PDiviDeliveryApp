const express = require('express');
const loginController = require('../controllers/login.controller');
const loginValidator = require('../middlewares/loginValidator');

const loginRouter = express.Router();

loginRouter.post('/', loginValidator, (req, res) => loginController.getUser(req, res));

module.exports = loginRouter;
