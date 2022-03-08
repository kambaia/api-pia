

import  { Router} from 'express';
import authUsersController from '../controllers/authUsersController';
import requestAccount from '../controllers/requestAccount';
import UserController from '../controllers/userController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const userRouter = Router();
userRouter.get('/api/users', UserController.listAllUser);
userRouter.get('/api/user/:userId', UserController.listUser);
userRouter.post('/api/user', UserController.saveUser);
userRouter.put('/api/user/:userId', UserController.updateUser);
userRouter.delete('/api/user/:userId', UserController.deleteUser);



/********************************authintication ************************ */

userRouter.post("/api/session_school", authUsersController.authinticationShools);
userRouter.post("/api/session_parent", authUsersController.authinticationParents);
userRouter.post("/api/auth_students", authUsersController.authinticationStudent);
//userRouter.post("/api/auth_students", authUsersController.authinticationStudent);



/********************************Request account ************************ */

userRouter.get("/api/request-account/:idSchools", requestAccount.requestAccountStudent);

