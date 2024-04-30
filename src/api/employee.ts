import  { Router} from 'express';
import employeeController from './controllers/employeeController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const employeeRouter = Router();
employeeRouter.get('/employee', employeeController.listAllEmployee);
employeeRouter.get('/employee/:userId', employeeController.listOneEmployee);
employeeRouter.get('/employee/school/:schoolId', employeeController.listAllEmployeeSchool);
employeeRouter.post('/employee', employeeController.saveEmployee);
employeeRouter.put('/employee/:employeesId', employeeController.updateEmployee);
employeeRouter.delete('/employee/:employeesId', employeeController.deleteEmployee);

