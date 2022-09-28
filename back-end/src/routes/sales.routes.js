const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateToken } = require('../helpers/validate.token');

const router = express.Router({ mergeParams: true });

// Accessing the route via localhost:3001/sale/
router.get('/seller', validateToken, (req, res) => salesController.getSaleBySellerId(req, res));
router.get('/:id', validateToken, (req, res) => salesController.getSaleById(req, res));

module.exports = router;