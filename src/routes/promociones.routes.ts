import { Router, type Router as RouterType } from 'express';
import { getPromociones } from '../controllers/promociones.controller';
import { asyncHandler } from '../middlewares';

const router: RouterType = Router();

router.get('/', asyncHandler(getPromociones));

export default router;
