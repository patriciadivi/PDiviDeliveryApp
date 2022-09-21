'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: '1',
        seller_id: '2',
        total_price: '99.89',
        delivery_address: 'Rua das Flores, 123',
        delivery_number: '1',
        sale_date: new Date(),
        status: 'pending'
      },
      {
        user_id: '1',
        seller_id: '2',
        total_price: '1231',
        delivery_address: 'Av Paulista, 999',
        delivery_number: '2',
        sale_date: new Date(),
        status: 'fulfilled'
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});

  }
};
