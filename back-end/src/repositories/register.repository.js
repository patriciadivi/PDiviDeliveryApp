const { users } = require('../database/models');
const { Op } = require("sequelize");

const getUser = async ({ name, email }) => {
  const userObj = await users.findOne({ where: {[Op.or]: [{ name }, { email }]} });
  return userObj;
};

const postUser = async ({ name, email, password, }) => {
  const newUser = await users.create({ name, email, password })
  return newUser;
};

module.exports = {
  getUser,
  postUser
};