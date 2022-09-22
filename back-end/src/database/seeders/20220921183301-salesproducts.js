'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salesProducts', [
      {
        sale_id: '1',
        product_id: 1,
        quantity: 6
      },
      {
        sale_id: '2',
        product_id: 2,
        quantity: 100
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('salesProducts', null, {});

  }
};
