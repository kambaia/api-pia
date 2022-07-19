
import  { Router} from 'express';
import rolesController from '../controllers/rolesControllers';
export const roleRouter = Router();
roleRouter.get('/api/roles', rolesController.listRoles);
roleRouter.get('/api/roles/:school', rolesController.listRolesSchool);
roleRouter.post('/api/roles', rolesController.saveRoles);
