const express = require('express');
const productController = require('../controllers/product.controller');
const validateToken = require('../helpers/validate.token');

const router = express.Router();

router.get('/', validateToken, (req, res) => productController.getProduct(req, res));

module.exports = router;
