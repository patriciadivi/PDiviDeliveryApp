const checkoutService = require('../services/checkout.service');

const findAll = async (req, res) => {
  const { role } = req.body;
  const result = await checkoutService.findAll(role);
  return res.status(200).json(result);
};

const createController = async (req, res) => {
  const { id: userId } = req.user;
  const saleData = { userId, ...req.body };
  const newSale = await checkoutService.create(saleData);
  return res.status(201).json(newSale);
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
  createController,
  findOneController,
  updateController,
};
