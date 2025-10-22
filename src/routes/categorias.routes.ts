import { Router, type Router as RouterType } from 'express';
import { getCategorias } from '../controllers/categorias.controller';
import { asyncHandler } from '../middlewares';

const router: RouterType = Router();

router.get('/', asyncHandler(getCategorias));

export default router;
