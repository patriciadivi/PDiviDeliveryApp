const { sales, users } = require('../database/models');

const findAll = async (role) => {
  const usersObj = await users.findAll({ where: { role }, exclude: 'password' });
  return usersObj;
};

const createOrder = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber }) => {
  const saleObj = sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });
  return saleObj;
};

const findOne = async ({ id }) => {
  const userObj = await sales.findOne({ where: { id } });
  return userObj;
};

const update = async (id, userRole) => sales.findOne(id, userRole);

module.exports = {
  findAll,
  createOrder,
  findOne,
  update,
};
