const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const ordersRouter = express.Router();

ordersRouter.post('/', tokenValidator, (req, res) => salesController.getOrdersByUserId(req, res));

module.exports = ordersRouter;
