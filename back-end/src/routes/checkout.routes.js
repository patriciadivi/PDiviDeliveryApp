const express = require('express');
const {
  findAll,
  createController,
  findOneController,
  updateController,
} = require('../controllers/checkout.controller').default;
const loginValidator = require('../middlewares/loginValidator');

const checkoutRouter = express.Router();

checkoutRouter.get('/', loginValidator, findAll);
checkoutRouter.get('/:id', loginValidator, findOneController);
checkoutRouter.post('/', loginValidator, createController);
checkoutRouter.put('/:id', loginValidator, updateController);

module.exports = checkoutRouter;
