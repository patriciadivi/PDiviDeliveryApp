const validator = require('email-validator');
const CustomError = require('../err/CustomError');

const charactersValidator = (name, password) => {
  if (name.length < 12) {
    throw new CustomError(404, 'Name must be at least 12 characters long');
  }

  if (password.length < 6) {
    throw new CustomError(404, 'Password must be at least 6 characters long');
  }
};

const registerAdminValidator = (req, _res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError(400, 'Some data was not reported, please check and try again');
  }

  charactersValidator(name, password);

  const emailIsValid = validator.validate(email);

  if (!emailIsValid) throw new CustomError(404, 'Email validation failed');

  next();
};

module.exports = registerAdminValidator;