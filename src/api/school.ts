import  { Router} from 'express';
import schoolController from './controllers/schoolController ';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const schoolRouter = Router();
schoolRouter.get('/school', schoolController.listAllSchools);
schoolRouter.get('/schools/:schoolId', schoolController.listAllSchool);
schoolRouter.get('/school/:schoolId', schoolController.listOneSchool);
schoolRouter.post('/school', schoolController.saveSchool);
schoolRouter.put('/school/:schoolId', schoolController.updateSchool);
schoolRouter.delete('/school/:schoolId', schoolController.deleteSchool);

