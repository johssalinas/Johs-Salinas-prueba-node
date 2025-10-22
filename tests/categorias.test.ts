import request from 'supertest';
import app from '../src/app';

describe('GET /api/categorias - Listar categorías ordenadas por cantidad de productos DESC', () => {
  it('debe tener el formato de respuesta correcto: message y data', async () => {
    const response = await request(app)
      .get('/api/categorias')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'consultado correctamente');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('cada categoría debe tener: idCategoria, nombre, cantProductos', async () => {
    const response = await request(app)
      .get('/api/categorias')
      .expect(200);

    const categorias = response.body.data;
    expect(categorias.length).toBeGreaterThan(0);

    categorias.forEach((cat: any) => {
      expect(cat).toHaveProperty('idCategoria');
      expect(cat).toHaveProperty('nombre');
      expect(cat).toHaveProperty('cantProductos');
      expect(typeof cat.idCategoria).toBe('number');
      expect(typeof cat.nombre).toBe('string');
      expect(typeof cat.cantProductos).toBe('number');
    });
  });

  it('debe estar ordenado por cantProductos en orden DESCENDENTE', async () => {
    const response = await request(app)
      .get('/api/categorias')
      .expect(200);

    const categorias = response.body.data;
    
    for (let i = 0; i < categorias.length - 1; i++) {
      expect(categorias[i].cantProductos).toBeGreaterThanOrEqual(categorias[i + 1].cantProductos);
    }
  });
});
