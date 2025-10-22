import { Request, Response } from 'express';
import { Promocion } from '../models/Promocion';
import { TiendasPromociones } from '../models/TiendasPromociones';
import { Tienda } from '../models/Tienda';
import { Op } from 'sequelize';

interface PromocionData {
  idPromocion: number;
  nombre: string;
  tiendas: string[];
}

export const getPromociones = async (req: Request, res: Response): Promise<void> => {
  const dia = parseInt(req.query.dia as string);

  const promociones = await Promocion.findAll({
    attributes: ['id', 'nombre', 'dias_semana'],
    include: [
      {
        model: TiendasPromociones,
        as: 'tiendas',
        attributes: ['inicio', 'fin'],
        where: {
          inicio: { [Op.lte]: new Date() },
          fin: { [Op.gte]: new Date() },
        },
        required: false,
        include: [
          {
            model: Tienda,
            as: 'tienda',
            attributes: ['nombre'],
          },
        ],
      },
    ],
  });

  const promocionesFormateadas: PromocionData[] = promociones
    .filter((promo) => {
      if (isNaN(dia)) return true;
      const diasArray = promo.dias_semana?.split('') || [];
      return diasArray[dia] === '1';
    })
    .map((promo) => ({
      idPromocion: promo.id,
      nombre: promo.nombre,
      tiendas: promo.tiendas.map((tp) => tp.tienda.nombre),
    }));

  res.json({
    message: 'consultado correctamente',
    data: promocionesFormateadas,
  });
};
