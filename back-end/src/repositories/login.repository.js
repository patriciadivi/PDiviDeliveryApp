const { Users } = require('../database/models');

const getUser = async ({ email }) => {
  const userObj = await Users.findOne({ where: { email } });
  return userObj;
};

module.exports = {
  getUser,
};
