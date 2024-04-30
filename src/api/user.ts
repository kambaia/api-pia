

import  { Router} from 'express';
import requestAccount from './controllers/requestAccount';
import userController from './controllers/userController';

//import { securetyUser } from '../middlewares/ensureAuthenticated';
export const userRouter = Router();
userRouter.get('/user', userController.listAllUser);
userRouter.get('/users-school', userController.listAllUserForSchool);
userRouter.get('/users-school/:schoolId', userController.listAllUserForSchool);
userRouter.get('/user/:userId',  userController.listOneUser);
userRouter.post('/user', userController.saveUser);
userRouter.put('/user/:userId', userController.updateUser);
userRouter.delete('/user/:userId', userController.deleteUser);


/********************************Request account ************************ */

userRouter.get("/request-account/:idSchools", requestAccount.requestAccountStudent);

