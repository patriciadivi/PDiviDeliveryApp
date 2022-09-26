const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
// const readSecret = require('./read.secret');

require('dotenv').config();

const generateToken = (data) => {
 const { id, name, email, role } = data;
 const newUser = { id, name, email, role };
 const token = jwt.sign({ data: newUser }, jwtKey, {
  expiresIn: '365d',
  algorithm: 'HS256',
 });
  console.log(jwtKey);
  return token;
};

module.exports = {
  generateToken,
};
