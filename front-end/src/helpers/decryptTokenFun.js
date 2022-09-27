const jwt = require('jsonwebtoken');
// require('dotenv').config();
const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const decryptTokenfunc = (paramsToken) => {
  try {
    const token = jwt.verify(paramsToken, jwtKey);
    // const { data } = token;
    // if (!token) return { status: 401, mensagem: 'invalid token' };
    return token;
  } catch (error) {
    console.error(error.message);
  }
};

export default decryptTokenfunc;
