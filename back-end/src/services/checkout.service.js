const checkoutRepository = require('../repositories/checkout.repository');

const findAll = async (role) => {
  const usersObj = await checkoutRepository.findAll({ where: { role } });
  return usersObj;
};

const createOrder = async (orderObj) => {
  const order = await checkoutRepository.createOrder(orderObj);
  return order;
};

module.exports = {
  findAll,
  createOrder,
};
