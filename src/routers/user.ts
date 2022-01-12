

import  { Router} from 'express';
import authUsersController from '../controllers/authUsersController';
import requestAccount from '../controllers/requestAccount';
import UserController from '../controllers/userController';
export const userRouter = Router();
userRouter.get('/api/users', UserController.listAllUser);
userRouter.get('/api/user/:userId', UserController.listUser);
userRouter.post('/api/user', UserController.saveUser);
userRouter.put('/api/user/:userId', UserController.updateUser);
userRouter.delete('/api/user/:userId', UserController.deleteUser);



/********************************authintication ************************ */

userRouter.post("/api/auth_schooles", authUsersController.authinticationShools);
userRouter.post("/api/auth-parents", authUsersController.authinticationParents);
userRouter.post("/api/auth-student", authUsersController.authinticationStudent);



/********************************Request account ************************ */

userRouter.get("/api/request-account/:idSchools", requestAccount.requestAccountStudent);

