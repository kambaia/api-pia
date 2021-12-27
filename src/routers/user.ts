

import  { Router} from 'express';
import UserController from '../controllers/UserController';
export const userRouter = Router();
userRouter.get('/api/users', UserController.listAllUser);
userRouter.get('/api/user/:userId', UserController.listUser);
userRouter.post('/api/user', UserController.saveUser);
userRouter.put('/api/user/:userId', UserController.updateUser);
userRouter.delete('/api/user/:userId', UserController.deleteUser);
