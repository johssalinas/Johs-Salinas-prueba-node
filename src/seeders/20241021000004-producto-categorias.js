'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('productos_categorias', [
      { id_producto: 1, id_categoria: 1, createdAt: now, updatedAt: now },
      { id_producto: 2, id_categoria: 1, createdAt: now, updatedAt: now },
      { id_producto: 3, id_categoria: 2, createdAt: now, updatedAt: now },
      { id_producto: 4, id_categoria: 2, createdAt: now, updatedAt: now },
      { id_producto: 5, id_categoria: 3, createdAt: now, updatedAt: now },
      { id_producto: 6, id_categoria: 4, createdAt: now, updatedAt: now },
      { id_producto: 7, id_categoria: 5, createdAt: now, updatedAt: now },
      { id_producto: 8, id_categoria: 6, createdAt: now, updatedAt: now },
      { id_producto: 9, id_categoria: 7, createdAt: now, updatedAt: now },
      { id_producto: 10, id_categoria: 8, createdAt: now, updatedAt: now },
      { id_producto: 11, id_categoria: 9, createdAt: now, updatedAt: now },
      { id_producto: 12, id_categoria: 10, createdAt: now, updatedAt: now },
      { id_producto: 13, id_categoria: 1, createdAt: now, updatedAt: now },
      { id_producto: 14, id_categoria: 2, createdAt: now, updatedAt: now },
      { id_producto: 15, id_categoria: 7, createdAt: now, updatedAt: now }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('productos_categorias', null, {});
    await queryInterface.bulkDelete('producto_categorias', null, {});
  }
};
