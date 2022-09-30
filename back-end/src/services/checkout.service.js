const salesProducts = require('../database/models');
const users = require('../database/models');
const products = require('../database/models');
const checkoutRepository = require('../repositories/checkout.repository');

const findAll = async (role) => {
  const usersObj = await checkoutRepository.findAll(role);
  return usersObj;
};

const create = async ({ userId, sellerId, deliveryAddress, deliveryNumber }) => {
  let totalPrice = products.reduce((sum, product) => sum + (+product.price * product.quantity), 0);
  totalPrice = totalPrice.toFixed(2);
  const newSale = await checkoutRepository
  .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  const { id: saleId } = newSale.dataValues;
  const saleProducts = products.map(({ id, quantity }) => ({ saleId, productId: id, quantity }));
  await salesProducts.bulkCreate(saleProducts);
  return newSale.dataValues;
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
  create,
  findOne,
  update,
};
