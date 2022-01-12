import  { Router} from 'express';
import groupController from '../controllers/groupController';
export const groupRouter = Router();
groupRouter.get('/api/group', groupController.listAll);
groupRouter.post('/api/group', groupController.save);
