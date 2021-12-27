
import  { Router} from 'express';
import rolesController from '../controllers/RolesControllers';
export const roleRouter = Router();
roleRouter.get('/api/roles', rolesController.listRoles);
roleRouter.post('/api/roles', rolesController.saveRoles);
