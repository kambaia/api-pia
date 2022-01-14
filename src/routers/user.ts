

import  { Router} from 'express';
import authUsersController from '../controllers/authUsersController';
import requestAccount from '../controllers/requestAccount';
import UserController from '../controllers/UserController';
import { securetyUser } from '../middlewares/ensureAuthenticated'
export const userRouter = Router();
userRouter.get('/api/users', securetyUser, UserController.listAllUser);
userRouter.get('/api/user/:userId', UserController.listUser);
userRouter.post('/api/user', UserController.saveUser);
userRouter.put('/api/user/:userId', UserController.updateUser);
userRouter.delete('/api/user/:userId', UserController.deleteUser);



/********************************authintication ************************ */

userRouter.post("/api/auth_schools", authUsersController.authinticationShools);
userRouter.post("/api/auth_parents", authUsersController.authinticationParents);
userRouter.post("/api/auth_students", authUsersController.authinticationStudent);
//userRouter.post("/api/auth_students", authUsersController.authinticationStudent);



/********************************Request account ************************ */

userRouter.get("/api/request-account/:idSchools", requestAccount.requestAccountStudent);

