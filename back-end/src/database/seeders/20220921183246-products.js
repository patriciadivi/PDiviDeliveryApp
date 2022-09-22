'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Heineken',
        price: 11.00,
        url_image: 'https://www.heineken.com/media-us/01pfxdqq/heineken-original-bottle.png?quality=85'
      },
      {
        name: 'Caracu',
        price: 9.40,
        url_image: 'https://tezeio.vteximg.com.br/arquivos/ids/322465-1000-1000/7891149210305_1_1.jpg'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
