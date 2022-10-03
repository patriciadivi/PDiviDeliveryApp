'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: '1',
        seller_id: '2',
        total_price: '99.89',
        delivery_address: 'Rua das Flores',
        delivery_number: '123',
        sale_date: new Date(),
        status: 'Pendente'
      },
      {
        user_id: '1',
        seller_id: '2',
        total_price: '1231',
        delivery_address: 'Av Paulista',
        delivery_number: '495',
        sale_date: new Date(),
        status: 'Entregue'
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});

  }
};
