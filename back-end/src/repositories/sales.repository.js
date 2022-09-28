const { sales, products, users } = require('../database/models');

const getSalesBySellerId = async (id) => {
  const salesObj = await sales.findAll({ where: { sellerId: id } });
  return salesObj;
};

const getSaleById = async (id) => {
    const saleObj = await sales.findByPk(id, { include: [
        { model: products, as: 'products' },
        { model: users, as: 'seller', attributes: { exclude: ['password'] } },
      ] });
  
      if (!saleObj) {
        return { err: { code: 'notFound', message: 'sale not found' } };
      }
    
    return saleObj;
  };

module.exports = {
  getSalesBySellerId,
  getSaleById,
};