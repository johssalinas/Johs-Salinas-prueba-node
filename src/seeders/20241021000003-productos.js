'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('productos', [
      { id: 1, estado: 1, kit: 0, barcode: '7702001000011', nombre: 'Coca Cola 2L', presentacion: '2 Litros', descripcion: 'Bebida gaseosa sabor original', foto: null, peso: 2.00, createdAt: now, updatedAt: now },
      { id: 2, estado: 1, kit: 0, barcode: '7702001000028', nombre: 'Coca Cola 1.5L', presentacion: '1.5 Litros', descripcion: 'Bebida gaseosa sabor original', foto: null, peso: 1.50, createdAt: now, updatedAt: now },
      { id: 3, estado: 1, kit: 0, barcode: '7702002000012', nombre: 'Leche Alpina Entera', presentacion: '1 Litro', descripcion: 'Leche entera pasteurizada', foto: null, peso: 1.00, createdAt: now, updatedAt: now },
      { id: 4, estado: 1, kit: 0, barcode: '7702002000029', nombre: 'Yogurt Alpina Fresa', presentacion: '1 Litro', descripcion: 'Yogurt sabor a fresa', foto: null, peso: 1.00, createdAt: now, updatedAt: now },
      { id: 5, estado: 1, kit: 0, barcode: '7702003000013', nombre: 'Pan Tajado Bimbo', presentacion: '600g', descripcion: 'Pan tajado integral', foto: null, peso: 0.60, createdAt: now, updatedAt: now },
      { id: 6, estado: 1, kit: 0, barcode: '7702004000014', nombre: 'Pechuga de Pollo', presentacion: '1 Kg', descripcion: 'Pechuga de pollo fresca', foto: null, peso: 1.00, createdAt: now, updatedAt: now },
      { id: 7, estado: 1, kit: 0, barcode: '7702005000015', nombre: 'Manzana Roja', presentacion: '1 Kg', descripcion: 'Manzanas rojas importadas', foto: null, peso: 1.00, createdAt: now, updatedAt: now },
      { id: 8, estado: 1, kit: 0, barcode: '7702006000016', nombre: 'Aguardiente Antioqueño', presentacion: '750ml', descripcion: 'Aguardiente sin azúcar', foto: null, peso: 0.75, createdAt: now, updatedAt: now },
      { id: 9, estado: 1, kit: 0, barcode: '7702007000017', nombre: 'Papas Margarita Natural', presentacion: '250g', descripcion: 'Papas fritas naturales', foto: null, peso: 0.25, createdAt: now, updatedAt: now },
      { id: 10, estado: 1, kit: 0, barcode: '7702008000018', nombre: 'Shampoo Head & Shoulders', presentacion: '400ml', descripcion: 'Shampoo anticaspa', foto: null, peso: 0.40, createdAt: now, updatedAt: now },
      { id: 11, estado: 1, kit: 0, barcode: '7702009000019', nombre: 'Jabón en Polvo Ariel', presentacion: '1 Kg', descripcion: 'Detergente en polvo', foto: null, peso: 1.00, createdAt: now, updatedAt: now },
      { id: 12, estado: 1, kit: 0, barcode: '7702010000010', nombre: 'Pizza Congelada', presentacion: '600g', descripcion: 'Pizza familiar congelada', foto: null, peso: 0.60, createdAt: now, updatedAt: now },
      { id: 13, estado: 1, kit: 0, barcode: '7702001000035', nombre: 'Sprite 2L', presentacion: '2 Litros', descripcion: 'Bebida gaseosa sabor lima-limón', foto: null, peso: 2.00, createdAt: now, updatedAt: now },
      { id: 14, estado: 1, kit: 0, barcode: '7702002000036', nombre: 'Queso Campesino', presentacion: '500g', descripcion: 'Queso fresco campesino', foto: null, peso: 0.50, createdAt: now, updatedAt: now },
      { id: 15, estado: 1, kit: 0, barcode: '7702007000024', nombre: 'Doritos Nacho', presentacion: '200g', descripcion: 'Nachos sabor queso', foto: null, peso: 0.20, createdAt: now, updatedAt: now }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
