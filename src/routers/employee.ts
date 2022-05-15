import  { Router} from 'express';
import employeeController from '../controllers/employeeController';
//import { securetyUser } from '../middlewares/ensureAuthenticated'
export const employeeRouter = Router();
employeeRouter.get('/api/employees', employeeController.listAllEmployee);
employeeRouter.get('/api/employee/:userId', employeeController.listOneEmployee);
employeeRouter.get('/api/schools-employee/:schoolId', employeeController.listAllEmployeeSchool);

employeeRouter.post('/api/employee', employeeController.saveEmployee);
employeeRouter.put('/api/employee/:employeesId', employeeController.updateEmployee);
employeeRouter.delete('/api/employee/:employeesId', employeeController.deleteEmployee);

