const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (data) => {
 const { id, name, email, role } = data;
 const newUser = { id, name, email, role };
 const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET, {
  expiresIn: '365d',
  algorithm: 'HS256',
 });
  return token;
};

module.exports = {
  generateToken,
};