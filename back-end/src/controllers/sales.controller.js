const salesService = require('../services/sales.service');
// router.get('/seller', validateToken, (req, res) => salesController.getBySellerId(req, res));
// router.get('/:id', validateToken, (req, res) => salesController.getById(req, res));

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSaleById(id);

  return res.status(200).json(sale);
};

const getSaleBySellerId = async (req, res) => {
  const { user: { id } } = req;
  const saleBySeller = await salesService.getSaleBySellerId(id);

  return res.status(200).json(saleBySeller);
};

module.exports = {
    getSaleBySellerId,
    getSaleById,
};