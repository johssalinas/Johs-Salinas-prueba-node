import request from 'supertest';
import app from '../src/app';

describe('GET /api/productos - Listar productos con stock por tienda', () => {
  it('debe tener el formato de respuesta correcto: message y data', async () => {
    const response = await request(app)
      .get('/api/productos')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'consultado correctamente');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('cada producto debe tener: idProducto, nombre, presentacion, tiendas[]', async () => {
    const response = await request(app)
      .get('/api/productos')
      .expect(200);

    const productos = response.body.data;
    expect(productos.length).toBeGreaterThan(0);

    productos.forEach((prod: any) => {
      expect(prod).toHaveProperty('idProducto');
      expect(prod).toHaveProperty('nombre');
      expect(prod).toHaveProperty('presentacion');
      expect(prod).toHaveProperty('tiendas');
      expect(typeof prod.idProducto).toBe('number');
      expect(typeof prod.nombre).toBe('string');
      expect(Array.isArray(prod.tiendas)).toBe(true);
    });
  });

  it('cada tienda en el array debe tener: idTienda, nombre, stock', async () => {
    const response = await request(app)
      .get('/api/productos')
      .expect(200);

    const productos = response.body.data;
    
    productos.forEach((prod: any) => {
      if (prod.tiendas.length > 0) {
        prod.tiendas.forEach((tienda: any) => {
          expect(tienda).toHaveProperty('idTienda');
          expect(tienda).toHaveProperty('nombre');
          expect(tienda).toHaveProperty('stock');
          expect(typeof tienda.idTienda).toBe('number');
          expect(typeof tienda.nombre).toBe('string');
          expect(typeof tienda.stock).toBe('number');
        });
      }
    });
  });
});

describe('GET /api/productos/mas-vendidos - Top 10 productos más vendidos', () => {
  it('debe tener el formato de respuesta correcto: message y data', async () => {
    const response = await request(app)
      .get('/api/productos/mas-vendidos')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'consultado correctamente');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('debe retornar máximo 10 productos', async () => {
    const response = await request(app)
      .get('/api/productos/mas-vendidos')
      .expect(200);

    const productos = response.body.data;
    expect(productos.length).toBeLessThanOrEqual(10);
  });

  it('cada producto debe tener: idProducto, nombre, presentacion, unidadesVendidas', async () => {
    const response = await request(app)
      .get('/api/productos/mas-vendidos')
      .expect(200);

    const productos = response.body.data;
    expect(productos.length).toBeGreaterThan(0);

    productos.forEach((prod: any) => {
      expect(prod).toHaveProperty('idProducto');
      expect(prod).toHaveProperty('nombre');
      expect(prod).toHaveProperty('presentacion');
      expect(prod).toHaveProperty('unidadesVendidas');
      expect(typeof prod.idProducto).toBe('number');
      expect(typeof prod.nombre).toBe('string');
      expect(typeof prod.unidadesVendidas).toBe('number');
    });
  });

  it('debe estar ordenado por unidadesVendidas en orden DESCENDENTE', async () => {
    const response = await request(app)
      .get('/api/productos/mas-vendidos')
      .expect(200);

    const productos = response.body.data;
    
    for (let i = 0; i < productos.length - 1; i++) {
      expect(productos[i].unidadesVendidas).toBeGreaterThanOrEqual(productos[i + 1].unidadesVendidas);
    }
  });
});
