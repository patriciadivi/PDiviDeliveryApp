const jwt = require('jsonwebtoken');
const readSecret = require('./read.secret');

require('dotenv').config();

const generateToken = (data) => {
 const { id, name, email, role } = data;
 const newUser = { id, name, email, role };
 const token = jwt.sign({ data: newUser }, readSecret(), {
  expiresIn: '365d',
  algorithm: 'HS256',
 });
  return token;
};

module.exports = {
  generateToken,
};
