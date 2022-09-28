const { validateToken } = require('../helpers/validate.token');
const CustomError = require('../err/CustomError');

const tokenValidator = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new CustomError(400, 'Some data was not reported, please check and try again');
  }

  validateToken(authorization);

  next();
};

module.exports = tokenValidator;