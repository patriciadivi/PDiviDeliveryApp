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

const findOneController = async (req, res) => {
  const { id } = req.params;
  const sale = await checkoutService.findOne(id);
  return res.status(200).json(sale);
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  const updated = await checkoutService.update(id, role);
  return res.status(200).json(updated);
};

module.exports = {
  findAll,
  createOrder,
  findOneController,
  updateController,
};
