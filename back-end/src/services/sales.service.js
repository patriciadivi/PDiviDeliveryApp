const CustomError = require('../err/CustomError');
const salesRepository = require('../repositories/sales.repository');

const getSalesBySellerId = async (id) => {
    const sale = await salesRepository.getSalesBySellerId(id);
    if (!sale) throw new CustomError(404, 'Not found');
    return (sale);
  };

  const getSaleById = async (id) => {
    const sale = await salesRepository.getSaleById(id);
    if (!sale) throw new CustomError(404, 'Not found');
    return (sale);
  };

module.exports = {
  getSalesBySellerId,
  getSaleById,
};