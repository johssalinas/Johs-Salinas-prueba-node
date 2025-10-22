'use strict';

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('tiendas', [
      { 
        id: 1, 
        estado: 1, 
        nombre: 'Jumbo Cabecera', 
        descripcion: 'Tienda principal en el sector Cabecera - Calle 36 #15-20, Bucaramanga, Santander',
        telefono: '6076543210',
        direccion: 'Calle 36 #15-20, Cabecera del Llano, Bucaramanga',
        direccion_anexo: 'Local 102',
        direccion_barrio: 'Cabecera del Llano',
        createdAt: now, 
        updatedAt: now 
      },
      { 
        id: 2, 
        estado: 1, 
        nombre: 'Éxito Centro', 
        descripcion: 'Sucursal en el centro histórico - Carrera 19 #35-10, Bucaramanga, Santander',
        telefono: '6077654321',
        direccion: 'Carrera 19 #35-10, Centro, Bucaramanga',
        direccion_anexo: null,
        direccion_barrio: 'Centro',
        createdAt: now, 
        updatedAt: now 
      },
      { 
        id: 3, 
        estado: 1, 
        nombre: 'D1 Provenza', 
        descripcion: 'D1 en Provenza - Calle 105 #22-45, Bucaramanga, Santander',
        telefono: '6078765432',
        direccion: 'Calle 105 #22-45, Provenza, Bucaramanga',
        direccion_anexo: 'CC Provenza',
        direccion_barrio: 'Provenza',
        createdAt: now, 
        updatedAt: now 
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tiendas', null, {});
  }
};
