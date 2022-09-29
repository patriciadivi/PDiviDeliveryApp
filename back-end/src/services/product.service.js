const CustomError = require('../err/CustomError');
const productRepository = require('../repositories/product.repository');

const getAllProducts = async () => {
  const products = await productRepository.getAllProducts();
  if (!products) throw new CustomError(404, 'Not found');
  return products;
};

module.exports = {
  getAllProducts,
};
