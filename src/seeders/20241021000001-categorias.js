'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('categorias', [
      { id: 1, nombre: 'Bebidas', adultos: 0, createdAt: now, updatedAt: now },
      { id: 2, nombre: 'Lácteos', adultos: 0, createdAt: now, updatedAt: now },
      { id: 3, nombre: 'Panadería', adultos: 0, createdAt: now, updatedAt: now },
      { id: 4, nombre: 'Carnes', adultos: 0, createdAt: now, updatedAt: now },
      { id: 5, nombre: 'Frutas y Verduras', adultos: 0, createdAt: now, updatedAt: now },
      { id: 6, nombre: 'Licores', adultos: 1, createdAt: now, updatedAt: now },
      { id: 7, nombre: 'Snacks', adultos: 0, createdAt: now, updatedAt: now },
      { id: 8, nombre: 'Aseo Personal', adultos: 0, createdAt: now, updatedAt: now },
      { id: 9, nombre: 'Aseo Hogar', adultos: 0, createdAt: now, updatedAt: now },
      { id: 10, nombre: 'Congelados', adultos: 0, createdAt: now, updatedAt: now }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
