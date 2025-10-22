import { Router, type Router as RouterType } from 'express';
import productosRoutes from './productos.routes';
import categoriasRoutes from './categorias.routes';
import promocionesRoutes from './promociones.routes';

const router: RouterType = Router();

router.use('/productos', productosRoutes);
router.use('/categorias', categoriasRoutes);
router.use('/promociones', promocionesRoutes);

export default router;
