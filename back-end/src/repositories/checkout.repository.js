const { Sales, Users, SalesProducts, sequelize } = require('../database/models');

const findAll = async (role) => {
  const usersObj = await Users.findAll({ where: { role }, exclude: 'password' });
  return usersObj;
};

const createOrder = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, cart } = sale;
  // const cartPromises = cart.map((item) => (
    //   SalesProducts.create({
    //     saleId: saleObj.dataValues.id,
    //     productId: item.id,
    //     quantity: item.quantity,
  // })));

  // await Promise.all(cartPromises);
  const resultCreateSale = sequelize.transaction(async (trans) => {
    const saleObj = await Sales.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    }, { transaction: trans });

    const idSale = saleObj.dataValues.id;

    const editedCart = cart.map((el) => ({
      productId: el.id,
      quantity: el.quantity,
      saleId: idSale }));

    await SalesProducts.bulkCreate(editedCart, { transaction: trans });

    return saleObj;
  });
  return resultCreateSale;
};

const findOne = async ({ id }) => {
  const userObj = await Sales.findOne({ where: { id } });
  return userObj;
};

const update = async (id, userRole) => Sales.findOne(id, userRole);

module.exports = {
  findAll,
  createOrder,
  findOne,
  update,
};
