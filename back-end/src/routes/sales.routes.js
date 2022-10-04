const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const router = express.Router();

router.get('/:orderId', tokenValidator, (req, res) => {
  salesController.getSaleById(req, res);
});
router.post('/seller', tokenValidator, (req, res) => {
  salesController.getSalesBySellerId(req, res);
});

module.exports = router;
