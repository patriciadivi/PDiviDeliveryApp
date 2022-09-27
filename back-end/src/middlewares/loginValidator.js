const validator = require('email-validator');
const CustomError = require('../err/CustomError');

const loginValidator = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError(400, 'Some data was not reported, please check and try again');
  }
  const emailIsValid = validator.validate(email);

  if (!emailIsValid) throw new CustomError(404, 'Email validation failed');

  if (password.length < 6) {
    throw new CustomError(404, 'Password must be at least 6 characters long');
  }

  next();
};

module.exports = loginValidator;
