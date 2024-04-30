import  { Router} from 'express';
import academicYearController from './controllers/academicYearController';
import classController from './controllers/classController';
import courseController from './controllers/courseController';
import disciplineController from './controllers/disciplinaController';
import groupController from './controllers/groupController';
import feeController from './controllers/feeController';
export const definitionsSchoolRouter = Router();
/*******************************routers to register all de AcademicYear ********************* */
definitionsSchoolRouter.get('/academics-year', academicYearController.listAllAcademicYear);
definitionsSchoolRouter.get('/academic-year/:academicYearId', academicYearController.listOneAcademicYear);
definitionsSchoolRouter.post('/academic-year', academicYearController.saveAcademicYear);
definitionsSchoolRouter.put('/academic-year/:academicYearId', academicYearController.updateAcademicYear);
definitionsSchoolRouter.delete('/academic-year/:academicYearId', academicYearController.deleteAcademicYear);

/*******************************routers to register all de class ********************* */
definitionsSchoolRouter.get('/classe', classController.listAllClasses);
definitionsSchoolRouter.get('/class/:classId', classController.listOneClass);
definitionsSchoolRouter.post('/class', classController.saveClass);
definitionsSchoolRouter.put('/class/:classId', classController.updateClass);
definitionsSchoolRouter.delete('/class/:classId', classController.deleteClass);

/*******************************routers to register all de fee ********************* */
definitionsSchoolRouter.get('/fee', feeController.listAllFee);
definitionsSchoolRouter.get('/fee/:feeId', feeController.listOneFee);
definitionsSchoolRouter.post('/fee', feeController.saveFee);
definitionsSchoolRouter.put('/fee/:feeId', feeController.updateFee);
definitionsSchoolRouter.delete('/fee/:feeId', feeController.delete);

/*******************************routers to register all de course ********************* */
definitionsSchoolRouter.get('/course', courseController.listAllCourse);
definitionsSchoolRouter.get('/course/:courseId', courseController.listOneCourse);
definitionsSchoolRouter.post('/course', courseController.saveCourse);
definitionsSchoolRouter.put('/course/:courseId', courseController.updateCourso);
definitionsSchoolRouter.delete('/course/:courseId', courseController.deleteCourse);

/*******************************routers to register all de discipline ********************* */
definitionsSchoolRouter.get('/discipline', disciplineController.listAllDiscipline);
definitionsSchoolRouter.get('/discipline', disciplineController.listDiscipline);
definitionsSchoolRouter.post('/discipline', disciplineController.saveDiscipline);
definitionsSchoolRouter.put('/discipline/:disciplineId', disciplineController.updateDiscipline);
definitionsSchoolRouter.delete('/discipline/:disciplineId', disciplineController.deleteDisciplin);

/*******************************routers to register all de group ********************* */
definitionsSchoolRouter.get('/group', groupController.listAllGroups);
definitionsSchoolRouter.get('/group/:groupId', groupController.listOneGroup);
definitionsSchoolRouter.post('/group', groupController.saveGroup);
definitionsSchoolRouter.put('/group/:groupId', groupController.updateGroup);
definitionsSchoolRouter.delete('/group/:groupId', groupController.deleteGroup);

