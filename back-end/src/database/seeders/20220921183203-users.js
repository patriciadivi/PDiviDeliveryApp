'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'teste@teste.com',
        password: 'E10ADC3949BA59ABBE56E057F20F883E', // 123456
        role: 'user'
      },
      {
        name: 'Ada Lovelace',
        email: 'ada@ada.com',
        password: '7AC66C0F148DE9519B8BD264312C4D64', // abcdefg
        role: 'administrator'
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
