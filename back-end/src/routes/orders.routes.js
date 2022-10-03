const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const router = express.Router({ mergeParams: true });

router.get('/:id', tokenValidator, (req, res) => salesController.getOrdersByClientId(req, res));

module.exports = router;
