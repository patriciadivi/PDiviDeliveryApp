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
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'product_id',
        allowNull: false,
        references: { model: 'products', key: 'id' },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};
