import  { Router} from 'express';
import studentController from './controllers/studentController';
import registrationAnrolController from './controllers/registrationAnrolController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const studentRouter = Router();

//--------------------------------------Registro dos estudantes -----------------------'
studentRouter.get('/student', studentController.listAllStudent);
studentRouter.get('/student/:studentId', studentController.listOneStudent);
studentRouter.post('/student', studentController.saveStudent);
studentRouter.put('/student/:studentId', studentController.updateStudent);
studentRouter.delete('/student/:studentId', studentController.deleteStudent);

//--------------------------------------matriculas e confirmação dos estudantes -----------------------'
studentRouter.get('/sudentEnrollment', registrationAnrolController.listAllSudentEnrollment);
studentRouter.get('/sudentEnrollment/:enrollmenId', registrationAnrolController.listOneSudentEnrollment);
studentRouter.post('/sudentEnrollment', registrationAnrolController.saveSudentEnrollment);
studentRouter.put('/sudentEnrollment/:enrollmenId', registrationAnrolController.updateSudentEnrollment);
studentRouter.delete('/sudentEnrollment/:enrollmenId', registrationAnrolController.deleteSudentEnrollment);


