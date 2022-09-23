require('dotenv').config();
const jwt = require('jsonwebtoken');
const CustomErro = require('../err/CustomErro');

const validateToken = (token) => new Promise((resolve, _reject) => {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) throw new CustomErro(401, 'Expired or invalid token');
        resolve(decoded);
    });
    return verifyToken;
});

module.exports = { validateToken };