const express = require('express');
const registerController = require('../controllers/register.controller');
const registerValidator = require('../middlewares/registerValidator');

const registerRouter = express.Router();

registerRouter.post('/', registerValidator, (req, res) => registerController.postUser(req, res));

module.exports = registerRouter;
