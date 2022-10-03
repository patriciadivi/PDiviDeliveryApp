const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const router = express.Router({ mergeParams: true });

router.get('/seller', tokenValidator, (req, res) => salesController.getSalesBySellerId(req, res));
router.get('/:id', tokenValidator, (req, res) => salesController.getSaleById(req, res));

module.exports = router;
