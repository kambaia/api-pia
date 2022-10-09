import  { Router} from 'express';
import studentController from '../controllers/studentController';
import registrationAnrolController from '../controllers/registrationAnrolController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const studentRouter = Router();

//--------------------------------------Registro dos estudantes -----------------------'
studentRouter.get('/api/students', studentController.listAllStudent);
studentRouter.get('/api/student/:studentId', studentController.listOneStudent);
studentRouter.post('/api/student', studentController.saveStudent);
studentRouter.put('/api/student/:studentId', studentController.updateStudent);
studentRouter.delete('/api/student/:studentId', studentController.deleteStudent);

//--------------------------------------matriculas e confirmação dos estudantes -----------------------'
studentRouter.get('/api/sudentEnrollments', registrationAnrolController.listAllSudentEnrollment);
studentRouter.get('/api/sudentEnrollment/:enrollmenId', registrationAnrolController.listOneSudentEnrollment);
studentRouter.post('/api/sudentEnrollment', registrationAnrolController.saveSudentEnrollment);
studentRouter.put('/api/sudentEnrollment/:enrollmenId', registrationAnrolController.updateSudentEnrollment);
studentRouter.delete('/api/sudentEnrollment/:enrollmenId', registrationAnrolController.deleteSudentEnrollment);


