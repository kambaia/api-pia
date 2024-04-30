import { Router } from 'express';
import authUsersController from './controllers/authUsersController';
import userController from './controllers/userController';
/********************************authintication ************************ */
export const sessionRouter = Router();

sessionRouter.post('/session', authUsersController.authinticationShools);
sessionRouter.get('/user-access/:userId',  userController.accessUser);
/********************************authintication ************************ */
sessionRouter.post("/session_school", authUsersController.authinticationShools);
sessionRouter.post("/session_parent", authUsersController.authinticationParents);
sessionRouter.post("/auth_students", authUsersController.authinticationStudent);
//sessionRouter.post("/api/auth_students", authUsersController.authinticationStudent);

