'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    const stock = [];
    const quantities = [45, 78, 32, 91, 56, 23, 67, 89, 41, 73, 29, 85, 52, 38, 64, 95, 47, 81, 35, 69, 26, 92, 58, 44, 76, 31, 87, 53, 39, 71, 28, 94, 60, 46, 82, 34, 68, 25, 90, 55, 43, 75, 30, 86, 51];
    
    for (let p = 1; p <= 15; p++) {
      for (let t = 1; t <= 3; t++) {
        stock.push({
          id_producto: p,
          id_tienda: t,
          cantidad: quantities[(p - 1) * 3 + (t - 1)],
          fecha_ingreso: now,
          createdAt: now,
          updatedAt: now
        });
      }
    }

    await queryInterface.bulkInsert('productos_stocks', stock);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('productos_stocks', null, {});
  }
};
