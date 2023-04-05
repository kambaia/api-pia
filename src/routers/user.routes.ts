import { Router } from 'express';
import userController from '../controllers/userController';
//import { securetyUser } from '../middlewares/ensureAuthenticated';
export const userRouter = Router();
userRouter.get('/api/v1/users', userController.findAllUser);
userRouter.get('/api/v1/user/:id', userController.findWithOneUser);
userRouter.post('/api/v1/user/email', userController.findWithEmailUser);
userRouter.post('/api/v1/user', userController.addUser);

/*
userRouter.get('/api/user/:userId', userController.listOneUser);
userRouter.get('/api/user-access/:userId', userController.accessUser);
userRouter.post('/api/user', userController.saveUser);
userRouter.put('/api/user/:userId', userController.updateUser);
userRouter.delete('/api/user/:userId', userController.deleteUser);
*/
