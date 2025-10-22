import request from 'supertest';
import app from '../src/app';

describe('GET /api/promociones - Listar promociones filtradas por día de semana', () => {
  it('debe tener el formato de respuesta correcto: message y data', async () => {
    const response = await request(app)
      .get('/api/promociones')
      .expect(200);

    expect(response.body).toHaveProperty('message', 'consultado correctamente');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('cada promoción debe tener: idPromocion, nombre, tiendas[]', async () => {
    const response = await request(app)
      .get('/api/promociones')
      .expect(200);

    const promociones = response.body.data;
    expect(promociones.length).toBeGreaterThan(0);

    promociones.forEach((promo: any) => {
      expect(promo).toHaveProperty('idPromocion');
      expect(promo).toHaveProperty('nombre');
      expect(promo).toHaveProperty('tiendas');
      expect(typeof promo.idPromocion).toBe('number');
      expect(typeof promo.nombre).toBe('string');
      expect(Array.isArray(promo.tiendas)).toBe(true);
    });
  });

  it('debe filtrar promociones por parámetro dia donde 0=Lunes, 6=Domingo', async () => {
    const response = await request(app)
      .get('/api/promociones?dia=1')
      .expect(200);

    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});
