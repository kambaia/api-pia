

import  { Router} from 'express';
import authUsersController from '../controllers/authUsersController';
import requestAccount from '../controllers/requestAccount';
import userController from '../controllers/userController';
import { securetyUser } from '../middlewares/ensureAuthenticated'
export const userRouter = Router();
userRouter.get('/api/users/:schoolId', securetyUser, userController.listAllUser);
userRouter.get('/api/user/:userId', securetyUser,  userController.accessUser);
userRouter.post('/api/user', securetyUser, userController.saveUser);
userRouter.put('/api/user/:userId', userController.updateUser);
userRouter.delete('/api/user/:userId', userController.deleteUser);

/********************************authintication ************************ */

userRouter.post("/api/session_school", authUsersController.authinticationShools);
userRouter.post("/api/session_parent", authUsersController.authinticationParents);
userRouter.post("/api/auth_students", authUsersController.authinticationStudent);
//userRouter.post("/api/auth_students", authUsersController.authinticationStudent);



/********************************Request account ************************ */

userRouter.get("/api/request-account/:idSchools", requestAccount.requestAccountStudent);

