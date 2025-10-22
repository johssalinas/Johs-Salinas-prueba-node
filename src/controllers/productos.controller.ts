import { Request, Response } from 'express';
import { Producto } from '../models/Producto';
import { ProductoStock } from '../models/ProductoStock';
import { Tienda } from '../models/Tienda';
import { PedidoProducto } from '../models/PedidoProducto';
import { sequelize } from '../config/database';

interface TiendaStock {
  idTienda: number;
  nombre: string;
  stock: number;
}

interface ProductoConStock {
  idProducto: number;
  nombre: string;
  presentacion: string | null;
  tiendas: TiendaStock[];
}

interface ProductoMasVendido {
  idProducto: number;
  nombre: string;
  presentacion: string | null;
  unidadesVendidas: number;
}

export const getProductos = async (req: Request, res: Response): Promise<void> => {
  const productos = await Producto.findAll({
    attributes: ['id', 'nombre', 'presentacion'],
    include: [
      {
        model: ProductoStock,
        as: 'stocks',
        attributes: ['cantidad'],
        include: [
          {
            model: Tienda,
            as: 'tienda',
            attributes: ['id', 'nombre'],
          },
        ],
      },
    ],
  });

  const productosFormateados: ProductoConStock[] = productos.map((producto) => ({
    idProducto: producto.id,
    nombre: producto.nombre,
    presentacion: producto.presentacion ?? null,
    tiendas: producto.stocks.map((stock) => ({
      idTienda: stock.tienda.id,
      nombre: stock.tienda.nombre,
      stock: Number(stock.cantidad),
    })),
  }));

  res.json({
    message: 'consultado correctamente',
    data: productosFormateados,
  });
};

export const getProductosMasVendidos = async (req: Request, res: Response): Promise<void> => {
  const productos = await Producto.findAll({
    attributes: [
      'id',
      'nombre',
      'presentacion',
      [sequelize.fn('SUM', sequelize.col('pedidoProductos.cantidad')), 'unidadesVendidas'],
    ],
    include: [
      {
        model: PedidoProducto,
        as: 'pedidoProductos',
        attributes: [],
      },
    ],
    group: ['Producto.id'],
    order: [[sequelize.literal('unidadesVendidas'), 'DESC']],
    limit: 10,
    subQuery: false,
  });

  const productosFormateados: ProductoMasVendido[] = productos.map((producto) => ({
    idProducto: producto.id,
    nombre: producto.nombre,
    presentacion: producto.presentacion ?? null,
    unidadesVendidas: Number(producto.getDataValue('unidadesVendidas')),
  }));

  res.json({
    message: 'consultado correctamente',
    data: productosFormateados,
  });
};
