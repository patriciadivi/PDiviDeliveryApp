const salesProducts = require('../database/models');
const { users } = require('../database/models');
const checkoutRepository = require('../repositories/checkout.repository');

const findAll = async (role) => {
  const usersObj = await checkoutRepository.findAll(role);
  return usersObj;
};

const createOrder = async (orderObj) => {
  const order = await checkoutRepository.createOrder(orderObj);
  return order;
};

const findOne = async (id) => checkoutRepository.findOne({ where: { id },
  include: [{ model: users, as: 'seller', attributes: ['name'] },
  { model: salesProducts, as: 'products' }] });

const update = async (id, userRole) => {
  const sale = await checkoutRepository.findOne({ where: { id } });
  if (userRole === 'customer' && sale.status === 'Em Trânsito') {
     await checkoutRepository.update({ status: 'Entregue' }, { where: { id } });
      }
  if (userRole === 'seller') {
 const newStatus = sale.status === 'Pendente'
  ? 'Preparando' : 'Em Trânsito';

  await checkoutRepository.update({ status: newStatus }, { where: { id } });
    }
      return checkoutRepository.findOne({ where: { id } });
};

module.exports = {
  findAll,
  createOrder,
  findOne,
  update,
};
