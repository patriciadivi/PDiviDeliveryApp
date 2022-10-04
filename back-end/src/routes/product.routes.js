const express = require('express');
const productController = require('../controllers/product.controller');
const tokenValidator = require('../middlewares/token.validator');

const productRouter = express.Router();

productRouter.get('/', tokenValidator, (req, res) => productController.getProduct(req, res));

module.exports = productRouter;
