'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // let descripcion = ['agua', 'luz', 'comida', 'limpieza','envio',]
    // let precios = ['2.99','5.00','7.59','3.50','5.50']

      await queryInterface.bulkInsert('servicios', [
        {
          descripcion: 'agua',
          precio: '2.99',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'luz',
          precio: '5.00',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'comida',
          precio: '7.59',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'limpieza',
          precio: '3.50',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          descripcion: 'envio',
          precio: '5.50',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
