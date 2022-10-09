import  { Router} from 'express';
import academicYearController from '../controllers/academicYearController';
import classController from '../controllers/classController';
import courseController from '../controllers/courseController';
import disciplineController from '../controllers/disciplinaController';
import groupController from '../controllers/groupController';
import feeController from '../controllers/feeController';
export const definitionsSchoolRouter = Router();
/*******************************routers to register all de AcademicYear ********************* */
definitionsSchoolRouter.get('/api/academics-years', academicYearController.listAllAcademicYear);
definitionsSchoolRouter.get('/api/academic-year/:academicYearId', academicYearController.listOneAcademicYear);
definitionsSchoolRouter.post('/api/academic-year', academicYearController.saveAcademicYear);
definitionsSchoolRouter.put('/api/academic-year/:academicYearId', academicYearController.updateAcademicYear);
definitionsSchoolRouter.delete('/api/academic-year/:academicYearId', academicYearController.deleteAcademicYear);

/*******************************routers to register all de class ********************* */
definitionsSchoolRouter.get('/api/classes', classController.listAllClasses);
definitionsSchoolRouter.get('/api/class/:classId', classController.listOneClass);
definitionsSchoolRouter.post('/api/class', classController.saveClass);
definitionsSchoolRouter.put('/api/class/:classId', classController.updateClass);
definitionsSchoolRouter.delete('/api/class/:classId', classController.deleteClass);

/*******************************routers to register all de fee ********************* */
definitionsSchoolRouter.get('/api/fees', feeController.listAllFee);
definitionsSchoolRouter.get('/api/fee/:feeId', feeController.listOneFee);
definitionsSchoolRouter.post('/api/fee', feeController.saveFee);
definitionsSchoolRouter.put('/api/fee/:feeId', feeController.updateFee);
definitionsSchoolRouter.delete('/api/fee/:feeId', feeController.delete);

/*******************************routers to register all de course ********************* */
definitionsSchoolRouter.get('/api/courses', courseController.listAllCourse);
definitionsSchoolRouter.get('/api/course/:courseId', courseController.listOneCourse);
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
definitionsSchoolRouter.get('/api/group/:groupId', groupController.listOneGroup);
definitionsSchoolRouter.post('/api/group', groupController.saveGroup);
definitionsSchoolRouter.put('/api/group/:groupId', groupController.updateGroup);
definitionsSchoolRouter.delete('/api/group/:groupId', groupController.deleteGroup);

