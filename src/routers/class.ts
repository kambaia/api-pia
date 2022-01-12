import  { Router} from 'express';
import ClassController from '../controllers/classController';
export const classRouter = Router();
classRouter.get('/api/classes', ClassController.listAllClasses);
classRouter.post('/api/class', ClassController.save);
