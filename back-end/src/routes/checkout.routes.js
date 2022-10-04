const express = require('express');

const checkoutController = require('../controllers/checkout.controller');
const tokenValidator = require('../middlewares/token.validator');

const checkoutRouter = express.Router();

checkoutRouter.post('/', tokenValidator, checkoutController.findAll);
checkoutRouter.post('/order', tokenValidator, checkoutController.createOrder);

module.exports = checkoutRouter;
