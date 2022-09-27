const productService = require('../services/product.service');

const getProduct = async (req, res) => {
  const getAllProducts = await productService.getAllProducts();
  return res.status(200).json(getAllProducts);
};

module.exports = {
  getProduct,
};
