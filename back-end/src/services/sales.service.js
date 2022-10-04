const CustomError = require('../err/CustomError');
const salesRepository = require('../repositories/sales.repository');

const getSalesBySellerId = async (sellerId) => {
    const sale = await salesRepository.getSalesBySellerId(sellerId);
    if (!sale) throw new CustomError(404, 'Not found');
    return (sale);
};

  const getSaleById = async (orderId) => {
    const sale = await salesRepository.getSaleById(orderId);
    if (!sale) throw new CustomError(404, 'Not found');
    return (sale);
  };

  const getOrdersByUserId = async (userId) => {
    const orders = await salesRepository.getOrdersByUserId(userId);
    if (!orders) throw new CustomError(404, 'Not found');
    return orders;
  };

  const patchOrderStatusById = async (orderId, status) => {
    const patchedOrder = await salesRepository.patchOrderStatusById(orderId, status);
    if (!patchedOrder) throw new CustomError(404, 'Not found');
    return patchedOrder;
  };

module.exports = {
  getSalesBySellerId,
  getSaleById,
  getOrdersByUserId,
  patchOrderStatusById,
};
