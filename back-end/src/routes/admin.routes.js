const express = require('express');
const adminController = require('../controllers/admin.controller');
const adminValidator = require('../middlewares/adminValidator');
const tokenValidator = require('../middlewares/token.validator');

const adminRouter = express.Router();

adminRouter.get('/', tokenValidator, (req, res) => adminController.getUsers(req, res));
adminRouter.post('/', tokenValidator, adminValidator, (req, res) => adminController
  .postUser(req, res));
adminRouter.delete('/', tokenValidator, (req, res) => adminController.deleteUser(req, res));

module.exports = adminRouter;
