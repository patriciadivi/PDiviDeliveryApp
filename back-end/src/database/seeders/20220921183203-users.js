'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'teste@teste.com',
        password: '123456',
        role: 'user'
      },
      {
        name: 'Ada Lovelace',
        email: 'ada@ada.com',
        password: '!@#$%&',
        role: 'administrator'
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
