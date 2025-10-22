import { Request, Response } from 'express';
import { Categoria } from '../models/Categoria';
import { ProductoCategoria } from '../models/ProductoCategoria';
import { sequelize } from '../config/database';

interface CategoriaConProductos {
  idCategoria: number;
  nombre: string;
  cantProductos: number;
}

export const getCategorias = async (req: Request, res: Response): Promise<void> => {
  const categorias = await Categoria.findAll({
    attributes: [
      'id',
      'nombre',
      [sequelize.fn('COUNT', sequelize.col('productos.id')), 'cantProductos'],
    ],
    include: [
      {
        model: ProductoCategoria,
        as: 'productos',
        attributes: [],
      },
    ],
    group: ['Categoria.id'],
    having: sequelize.literal('cantProductos > 0'),
    order: [[sequelize.literal('cantProductos'), 'DESC']],
    subQuery: false,
  });

  const categoriasFormateadas: CategoriaConProductos[] = categorias.map((categoria) => ({
    idCategoria: categoria.id,
    nombre: categoria.nombre,
    cantProductos: Number(categoria.getDataValue('cantProductos')),
  }));

  res.json({
    message: 'consultado correctamente',
    data: categoriasFormateadas,
  });
};
