const { Op } = require('sequelize');
const { Users } = require('../database/models');

const getUser = async ({ name, email, role }) => {
  if (!role) {
    const userObj = await Users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    return userObj;
  }

  const usersArray = await Users.findAll({ where: { [Op.not]: [role === 'administrator'] } });
  return usersArray;
};

const postUser = async ({ name, email, password, role }) => {
  const newUser = await Users.create({ name, email, password, role });
  return newUser;
};

const deleteUser = async ({ name, email }) => {
  const deletedUser = await Users.destroy({ where: { [Op.or]: [{ name }, { email }] } });
  return deletedUser;
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
};
