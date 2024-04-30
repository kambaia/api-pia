
import  { Router} from 'express';
import rolesController from './controllers/rolesControllers';
export const roleRouter = Router();
roleRouter.get('/role', rolesController.listRoles);
roleRouter.get('/roles/:school', rolesController.listRolesSchool);
roleRouter.post('/role', rolesController.saveRoles);
roleRouter.put('/role/:roleId', rolesController.updateRoles);
