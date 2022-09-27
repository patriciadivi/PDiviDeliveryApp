const registerServices = require('../services/register.service');

const postUser = async (req, res) => {
  const user = await registerServices.postUser(req.body);
  return res.status(201).json(user);
};

module.exports = {
  postUser,
};