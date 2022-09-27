const validator = require('email-validator');
const CustomErro = require('../err/CustomErro');

const loginValidator = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomErro(400, 'Some data was not reported, please check and try again');
  }
  const emailIsValid = validator.validate(email);

  if (!emailIsValid) throw new CustomErro(404, 'Email validation failed');

  if (password.length < 6) {
    throw new CustomErro(404, 'Password must be at least 6 characters long');
  }

  next();
};

module.exports = loginValidator;
