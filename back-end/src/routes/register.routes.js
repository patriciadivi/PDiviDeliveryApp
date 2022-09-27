const express = require('express');
const registerController = require('../controllers/register.controller');
const registerValidator = require('../middlewares/registerValidator');

const router = express.Router();

router.post('/', registerValidator, (req, res) => registerController.postUser(req, res));

module.exports = router;
