const salesProducts = require('../database/models');
const users = require('../database/models');
const products = require('../database/models');

const service = require('../repositories/checkout.repository');

const findAllSeller = async (sellerId) => 
  service.findAllSeller({
  where: { sellerId },     
});

const findAllCustomer = async (userId) => 
  service.findAllCustomer({
   where: { userId },     
 });  
  
const create = async ({ userId, sellerId, deliveryAddress, deliveryNumber }) => {
  let totalPrice = products.reduce((sum, product) => sum + (+product.price * product.quantity), 0);
  totalPrice = totalPrice.toFixed(2);
  const newSale = await service
  .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  const { id: saleId } = newSale.dataValues;
  const saleProducts = products.map(({ id, quantity }) => ({ saleId, productId: id, quantity }));
  await salesProducts.bulkCreate(saleProducts);
  return newSale.dataValues;
};

const findOne = async (id) => service.findOne({ where: { id },
  include: [{ model: users, as: 'seller', attributes: ['name'] },
  { model: salesProducts, as: 'products' }] });

const update = async (id, userRole) => {
  const sale = await service.findOne({ where: { id } });
  if (userRole === 'customer' && sale.status === 'Em Trânsito') {
     await service.update({ status: 'Entregue' }, { where: { id } });
      }    
  if (userRole === 'seller') {
 const newStatus = sale.status === 'Pendente' 
  ? 'Preparando' : 'Em Trânsito';
   
  await service.update({ status: newStatus }, { where: { id } });
    }
      return service.findOne({ where: { id } });
};

module.export = {  
  findAllSeller,
  findAllCustomer,
  create,
  findOne,
  update,
};
