const md5 = require('md5');
const loginRepository = require('../repositories/login.repository');

const getUser = async ({ email, password }) => {
  const hashedPassword = md5(password).toUpperCase();
  const user = await loginRepository.getUser({ email });

  if (!user) {
    const erro = new Error('User not found');
    erro.status = 404;
    throw erro;
  }

  if (hashedPassword !== user.password) {
    const erro = new Error('Password mismatch');
    erro.status = 406;
    throw erro;
  }

  return user;
};

module.exports = {
  getUser,
};
