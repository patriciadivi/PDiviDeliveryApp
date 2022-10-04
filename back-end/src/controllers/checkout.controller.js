const checkoutService = require('../services/checkout.service');

const findAll = async (req, res) => {
  const { role } = req.body;
  const result = await checkoutService.findAll(role);
  return res.status(200).json(result);
};

const createOrder = async (req, res) => {
  const order = await checkoutService.createOrder(req.body);
  return res.status(201).json(order);
};

module.exports = {
  findAll,
  createOrder,
};
