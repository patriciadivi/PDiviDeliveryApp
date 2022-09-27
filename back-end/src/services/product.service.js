const CustomErro = require('/../err/CustomErro');
const productRepository = require('../repositories/product.repository');

const getAllProducts = async () => {
  const products = await productRepository.getAllProducts();
  if (!products) throw new CustomErro(404, 'Not found');
  return (products);
};

module.exports = {
  getAllProducts,
};
