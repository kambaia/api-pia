import  { Router} from 'express';
import classController from '../controllers/classController';
import courseController from '../controllers/courseController';
import disciplineController from '../controllers/disciplinaController';
import groupController from '../controllers/groupController';
export const definitionsSchoolRouter = Router();
/*******************************routers to register all de class ********************* */
definitionsSchoolRouter.get('/api/classes', classController.listAllClasses);
definitionsSchoolRouter.post('/api/class', classController.saveClass);
definitionsSchoolRouter.put('/api/class/:classId', classController.updateClass);
definitionsSchoolRouter.delete('/api/class/:classId', classController.deleteClass);


/*******************************routers to register all de course ********************* */
definitionsSchoolRouter.get('/api/courses', courseController.listAllCourse);
definitionsSchoolRouter.get('/api/course', courseController.listOneCourse);
definitionsSchoolRouter.post('/api/course', courseController.saveCourse);
definitionsSchoolRouter.put('/api/course/:courseId', courseController.updateCourso);
definitionsSchoolRouter.delete('/api/course/:courseId', courseController.deleteCourse);

/*******************************routers to register all de discipline ********************* */
definitionsSchoolRouter.get('/api/disciplines', disciplineController.listAllDiscipline);
definitionsSchoolRouter.get('/api/discipline', disciplineController.listDiscipline);
definitionsSchoolRouter.post('/api/discipline', disciplineController.saveDiscipline);
definitionsSchoolRouter.put('/api/discipline/:disciplineId', disciplineController.updateDiscipline);
definitionsSchoolRouter.delete('/api/discipline/:disciplineId', disciplineController.deleteDisciplin);

/*******************************routers to register all de group ********************* */
definitionsSchoolRouter.get('/api/groups', groupController.listAllGroups);
definitionsSchoolRouter.get('/api/group', groupController.listOneGroup);
definitionsSchoolRouter.post('/api/group', groupController.saveGroup);
definitionsSchoolRouter.put('/api/group/:groudId', groupController.updateGroup);
definitionsSchoolRouter.delete('/api/group/:groudId', groupController.deleteGroup);
