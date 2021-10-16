

import  { Router} from 'express';
import UserController from '../controllers/UserController';
const routes = Router();
routes.get('/users', UserController.listAllUser);
routes.post('/users', UserController.saveUser);
export default routes;