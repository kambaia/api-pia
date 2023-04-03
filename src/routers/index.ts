import { userRouter } from './user.routes';
import { roleRouter } from './roles.routes';
import { Router } from 'express';
import { authRouter } from './auth.routes';

const router = Router();
router.use(userRouter);
router.use(roleRouter);
router.use(authRouter);
export default router;
