const express = require('express');
const productController = require('../controllers/product.controller');
const tokenValidator = require('../middlewares/token.validator');

const router = express.Router();

router.get('/', tokenValidator, (req, res) => productController.getProduct(req, res));

module.exports = router;
