import { Router, type Router as RouterType } from 'express';
import { getProductos, getProductosMasVendidos } from '../controllers/productos.controller';
import { asyncHandler } from '../middlewares';

const router: RouterType = Router();

router.get('/', asyncHandler(getProductos));
router.get('/mas-vendidos', asyncHandler(getProductosMasVendidos));

export default router;
