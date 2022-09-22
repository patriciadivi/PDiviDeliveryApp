const { users } = require('../database/models');

const getUser = async ({ email }) => {
  const userObj = await users.findOne({ where: { email } });
  return userObj;
};

module.exports = {
  getUser,
};
