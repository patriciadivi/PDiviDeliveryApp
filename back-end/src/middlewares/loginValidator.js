const validator = require('email-validator');

const loginValidator = (req, _res, next) => {
  const { email, password } = req.body;
  const emailIsValid = validator.validate(email);

  if (!emailIsValid) {
    const erro = new Error('Email validation failed');
    erro.status = 404;
    throw erro;
  }

  if (password.length < 6) {
    const erro = new Error('Password must be at least 6 characters long');
    erro.status = 404;
    throw erro;
  }

  next();
};

module.exports = loginValidator;
