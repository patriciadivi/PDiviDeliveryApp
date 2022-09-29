const { 
  findAllSeller,
  findAllCustomer,
  create,
  findOne,
  update, 
} = require('../services/checkout.service');

const findAll = async (req, res) => {
  const { id, role } = req.user;
  const sales = role;  
  if (sales === 'seller') {
    await findAllSeller(id);
  } else { 
    await findAllCustomer(id);
  }
  return res.status(200).json(sales);
};

const createController = async (req, res) => {
  const { id: userId } = req.user;
  const saleData = { userId, ...req.body };
  const newSale = await create(saleData);
  return res.status(201).json(newSale);
};

const findOneController = async (req, res) => {
  const { id } = req.params;
  const sale = await findOne(id);
  return res.status(200).json(sale);
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  const updated = await update(id, role);
  return res.status(200).json(updated);
};

export default { 
  findAll,
  createController,
  findOneController,
  updateController,
};

// testando
