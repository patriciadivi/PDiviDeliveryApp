const adminServices = require('../services/admin.service');

const getUsers = async (_req, res) => {
  const users = await adminServices.getUsers();
  return res.status(200).json(users);
};

const postUser = async (req, res) => {
  const message = await adminServices.postUser(req.body);
  return res.status(201).json(message);
};

const deleteUser = async (req, res) => {
  const deletedUser = await adminServices.deleteUser(req.body);
  return res.status(200).json(deletedUser);
};

module.exports = {
  postUser,
  getUsers,
  deleteUser,
};
