'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    const today = new Date('2025-10-21');
    const orders = [];
    const stores = [1, 2, 3, 1, 2, 3, 1, 2];
    const users = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < 60; i++) {
      const orderDate = new Date(today);
      orderDate.setDate(orderDate.getDate() - i);
      const ordersPerDay = 3 + (i % 3);
      
      for (let j = 0; j < ordersPerDay; j++) {
        const valorProductos = 50000 + Math.random() * 100000;
        const valorEnvio = 5000 + Math.random() * 5000;
        const valorDescuento = valorProductos * (Math.random() * 0.1);
        const valorCupon = Math.random() > 0.7 ? 5000 : 0;
        const impuestos = 19;
        const valorImpuestos = (valorProductos - valorDescuento - valorCupon) * 0.19;
        const valorFinal = valorProductos + valorEnvio - valorDescuento - valorCupon + valorImpuestos;
        const valorComision = valorProductos * 0.05;
        
        orders.push({
          id: (i * 5) + j + 1,
          id_tienda: stores[(i + j) % 8],
          id_user: users[j % 5],
          entrega_fecha: orderDate,
          valor_productos: Number(valorProductos.toFixed(3)),
          valor_envio: Number(valorEnvio.toFixed(3)),
          valor_descuento: Number(valorDescuento.toFixed(3)),
          valor_cupon: Number(valorCupon.toFixed(3)),
          impuestos: impuestos,
          valor_impuestos: Number(valorImpuestos.toFixed(3)),
          valor_final: Number(valorFinal.toFixed(3)),
          valor_comision: Number(valorComision.toFixed(3)),
          createdAt: now,
          updatedAt: now
        });
      }
    }

    await queryInterface.bulkInsert('pedidos', orders);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
