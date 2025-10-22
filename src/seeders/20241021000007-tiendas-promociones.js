'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    const monthAgo = new Date('2025-09-21');
    const monthAhead = new Date('2025-11-21');
    const yesterday = new Date('2025-10-20');

    await queryInterface.bulkInsert('tiendas_promociones', [
      { id_promocion: 1, id_tienda: 1, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 1, id_tienda: 2, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 1, id_tienda: 3, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 2, id_tienda: 1, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 2, id_tienda: 2, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 3, id_tienda: 3, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 4, id_tienda: 1, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 4, id_tienda: 2, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 4, id_tienda: 3, estado: 1, inicio: monthAgo, fin: monthAhead, createdAt: now, updatedAt: now },
      { id_promocion: 5, id_tienda: 1, estado: 0, inicio: new Date('2025-01-01'), fin: yesterday, createdAt: now, updatedAt: now },
      { id_promocion: 5, id_tienda: 2, estado: 0, inicio: new Date('2025-01-01'), fin: yesterday, createdAt: now, updatedAt: now }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tiendas_promociones', null, {});
  }
};
