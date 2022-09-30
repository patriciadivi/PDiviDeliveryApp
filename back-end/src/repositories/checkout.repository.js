const { sales, users } = require('../database/models');

const findAll = async (role) => {
  const usersObj = await users.findAll({ where: { role }, exclude: 'password' });
  return usersObj;
};

const create = async ({ products, userId, sellerId, deliveryAddress, deliveryNumber }) => sales
.create({
    products,
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
});

const findOne = async ({ id }) => {
    const userObj = await sales.findOne({ where: { id } });
    return userObj;
  };

const update = async (id, userRole) => sales.findOne(id, userRole);

module.exports = {
    findAll,
    create,
    findOne,
    update,
};
