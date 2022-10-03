const { Op } = require('sequelize');
const { Users } = require('../database/models');

const getUser = async ({ name, email }) => {
  const userObj = await Users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  return userObj;
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await Users.create({ name, email, password, role });
  return newUser;
};

module.exports = {
  getUser,
  postUser,
};
