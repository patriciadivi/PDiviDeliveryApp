require('dotenv').config();
const jwt = require('jsonwebtoken');
// const readSecret = require('./read.secret');
const jwtKey = require('fs')
.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
const CustomError = require('../err/CustomError');

const validateToken = (token) => new Promise((resolve, _reject) => {
    const verifyToken = jwt.verify(token, jwtKey, (error, decoded) => {
        if (error) throw new CustomError(401, 'Expired or invalid token');
        resolve(decoded);
    });
    return verifyToken;
});

module.exports = { validateToken };
