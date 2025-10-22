'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    const items = [];
    const prices = [6500, 5000, 4500, 7500, 8500, 15000, 10000, 42000, 5500, 22000, 18000, 17000, 6500, 13500, 6200];
    const popular = [1, 2, 9, 15];
    const patterns = [
      [1, 2], [1, 3], [2, 4], [9, 15], [1, 9], [2, 15], [3, 5], [4, 14],
      [6, 7], [10, 11], [1, 2, 9], [1, 2, 15], [9, 15, 13], [3, 4, 14]
    ];
    
    for (let i = 0; i < 60; i++) {
      const ordersPerDay = 3 + (i % 3);
      
      for (let j = 0; j < ordersPerDay; j++) {
        const orderId = (i * 5) + j + 1;
        const pattern = orderId % 40 < 24 
          ? [popular[orderId % 4]]
          : patterns[orderId % patterns.length];
        
        pattern.forEach(productId => {
          const qty = 1 + (orderId % 3);
          const price = prices[productId - 1];
          const totalTeorico = price * qty;
          items.push({
            id_pedido: orderId,
            id_producto: productId,
            cantidad: qty,
            valor_unitario: price,
            valor_unitario_promocion: null,
            total_teorico: totalTeorico,
            total_final: totalTeorico,
            id_promocion: null,
            createdAt: now,
            updatedAt: now
          });
        });
      }
    }

    await queryInterface.bulkInsert('pedidos_productos', items);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pedidos_productos', null, {});
  }
};
