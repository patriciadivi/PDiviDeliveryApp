const express = require('express');

const {
  findAll,
  // createController,
  findOneController,
  updateController,
} = require('../controllers/checkout.controller');
const tokenValidator = require('../middlewares/token.validator');

const checkoutRouter = express.Router();

checkoutRouter.post('/', tokenValidator, findAll);
checkoutRouter.post('/:id', tokenValidator, findOneController);
// checkoutRouter.post('/', tokenValidator, createController);
checkoutRouter.put('/:id', tokenValidator, updateController);

module.exports = checkoutRouter;
