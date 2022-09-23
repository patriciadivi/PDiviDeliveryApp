const loginServices = require('../services/login.service');

const getUser = async (req, res) => {
  const user = await loginServices.getUser(req.body);
  return res.status(200).json(user);
};

module.exports = {
  getUser,
};
