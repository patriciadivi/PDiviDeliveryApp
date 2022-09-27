const { Op } = require('sequelize');
const { users } = require('../database/models');

const getUser = async ({ name, email }) => {
  const userObj = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  return userObj;
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await users.create({ name, email, password, role });
  return newUser;
};

module.exports = {
  getUser,
  postUser,
};