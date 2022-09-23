const express = require('express');
const loginController = require('../controllers/login.controller');
const loginValidator = require('../middlewares/loginValidator');

const router = express.Router();

router.post('/', loginValidator, (req, res) => loginController.getUser(req, res));

module.exports = router;
