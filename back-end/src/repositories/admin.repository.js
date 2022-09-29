const { Op } = require('sequelize');
const { users } = require('../database/models');

const getUser = async ({ name, email, role }) => {
  if (!role) {
    const userObj = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    return userObj;
  }

  const usersArray = await users.findAll({ where: { [Op.not]: [role === 'administrator'] } });
  return usersArray;
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await users.create({ name, email, password, role });
  return newUser;
};

const deleteUser = async ({ name, email }) => {
  const deletedUser = await users.destroy({ where: { [Op.or]: [{ name }, { email }] } });
  return deletedUser;
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
};