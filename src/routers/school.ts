import  { Router} from 'express';
import schoolController from '../controllers/schoolController ';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const schoolRouter = Router();
schoolRouter.get('/api/schools', schoolController.listAllSchool);
schoolRouter.get('/api/school/:schoolId', schoolController.listOneSchool);
schoolRouter.get('/api/school_access/:userId', schoolController.listOneAcesss);
schoolRouter.post('/api/school', schoolController.saveSchool);
schoolRouter.put('/api/school/:schoolId', schoolController.updateSchool);
schoolRouter.delete('/api/school/:schoolId', schoolController.deleteSchool);

