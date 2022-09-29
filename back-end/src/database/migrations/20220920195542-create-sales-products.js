'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'sale_id',
        allowNull: false,
        references: { model: 'sales', key: 'id' },
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'product_id',
        allowNull: false,
        references: { model: 'products', key: 'id' },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
    // .then(() => queryInterface.addConstraint(
    //   'salesProducts',
    //   ['saleId', 'productId'],
    //   {
    //     type: 'primary key',
    //     name: 'sales_products_pkey'
    //   }
    // ))
    // This is a special way of composite primary key creation

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};