import  { Router} from 'express';
import studentController from '../controllers/studentController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const studentRouter = Router();
studentRouter.get('/api/students', studentController.listAllStudent);
studentRouter.get('/api/student/:studentId', studentController.listOneStudent);
studentRouter.post('/api/student', studentController.saveStudent);
studentRouter.put('/api/student/:studentId', studentController.updateStudent);
studentRouter.delete('/api/student/:studentId', studentController.deleteStudent);

