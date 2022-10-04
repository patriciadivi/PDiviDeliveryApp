const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const salesRouter = express.Router();

salesRouter.get('/:orderId', tokenValidator, (req, res) => {
  salesController.getSaleById(req, res);
});
salesRouter.post('/seller', tokenValidator, (req, res) => {
  salesController.getSalesBySellerId(req, res);
});
salesRouter.put('/:orderId', tokenValidator, (req, res) => {
  salesController.patchOrderStatusById(req, res);
});

module.exports = salesRouter;
