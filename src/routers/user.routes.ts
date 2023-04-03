import { Router } from 'express';
import authUsersController from '../controllers/authUsersController';
import requestAccount from '../controllers/requestAccount';
import userController from '../controllers/userController';
import { securetyUser } from '../middlewares/ensureAuthenticated';
export const userRouter = Router();
userRouter.get('/api/users', userController.listAllUser);
userRouter.get('/api/users-school', userController.listAllUserForSchool);
userRouter.get(
  '/api/users-school/:schoolId',
  userController.listAllUserForSchool
);
userRouter.get('/api/user/:userId', userController.listOneUser);
userRouter.get('/api/user-access/:userId', userController.accessUser);
userRouter.post('/api/user', userController.saveUser);
userRouter.put('/api/user/:userId', userController.updateUser);
userRouter.delete('/api/user/:userId', userController.deleteUser);
