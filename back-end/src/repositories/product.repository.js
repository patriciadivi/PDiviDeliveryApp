const { products } = require('../database/models');

const getAllProducts = async () => {
  const productsObj = await products.findAll();
  return productsObj;
};

module.exports = {
  getAllProducts,
};
