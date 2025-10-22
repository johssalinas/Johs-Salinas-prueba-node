'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('promociones', [
      {
        id: 1,
        estado: 1,
        nombre: 'Combo Familiar Bebidas',
        imagen: null,
        porcentaje: 50,
        dias_semana: '0000011',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 2,
        estado: 1,
        nombre: 'Descuento Lácteos',
        imagen: null,
        porcentaje: 15,
        dias_semana: '1111100',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 3,
        estado: 1,
        nombre: 'Martes de Carnes',
        imagen: null,
        porcentaje: 20,
        dias_semana: '0100000',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 4,
        estado: 1,
        nombre: 'Combo Snacks',
        imagen: null,
        porcentaje: 33,
        dias_semana: '1111111',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 5,
        estado: 1,
        nombre: 'Descuento Aseo Personal',
        imagen: null,
        porcentaje: 25,
        dias_semana: '0001100',
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('promociones', null, {});
  }
};
