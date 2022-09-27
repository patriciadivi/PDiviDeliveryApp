const validator = require('email-validator');
const CustomErro = require('../err/CustomErro');

const registerValidator = (req, _res, next) => {
  const { name, email, password } = req.body;

  if (name.length < 12) throw new CustomErro(404, 'Name must be at least 12 characters long');

  if (!name || !email || !password) {
    throw new CustomErro(400, 'Some data was not reported, please check and try again');
  }

  const emailIsValid = validator.validate(email);

  if (!emailIsValid) throw new CustomErro(404, 'Email validation failed');

  if (password.length < 6) throw new CustomErro(404, 'Password must be at least 6 characters long');

  next();
};

module.exports = registerValidator;