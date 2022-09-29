const adminServices = require('../services/admin.service');

const postUser = async (req, res) => {
  const user = await adminServices.postUser(req.body);
  return res.status(201).json(user);
};

const getUser = async (req, res) => {
  const user = await adminServices.postUser(req.body);
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const deletedUser = await adminServices.deleteUser(req.body);
  return res.status(200).json(deletedUser);
};

module.exports = {
  postUser,
  getUser,
  deleteUser,
};