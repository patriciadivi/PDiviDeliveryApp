const express = require('express');

const checkoutController = require('../controllers/checkout.controller');
const tokenValidator = require('../middlewares/token.validator');

const checkoutRouter = express.Router();

checkoutRouter.post('/', tokenValidator, checkoutController.findAll);
// checkoutRouter.post('/:id', tokenValidator, findOneController);
checkoutRouter.post('/order', tokenValidator, checkoutController.createOrder);
// checkoutRouter.put('/:id', tokenValidator, updateController);

module.exports = checkoutRouter;
