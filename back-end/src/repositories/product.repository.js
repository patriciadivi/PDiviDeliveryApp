const { Products } = require('../database/models');

const getAllProducts = async () => {
  const productsObj = await Products.findAll();
  return productsObj;
};

module.exports = {
  getAllProducts,
};
