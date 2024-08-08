'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'Jan',
        apellido: 'Doe',
        cedula: '012345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Jona',
        apellido: 'Smith',
        cedula: '112345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Mana',
        apellido: 'Carcelen',
        cedula: '212345',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nombre: 'Mene',
        apellido: 'Andrade',
        cedula: '312345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
