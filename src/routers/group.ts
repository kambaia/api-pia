import  { Router} from 'express';
import groupController from '../controllers/GroupController';
export const groupRouter = Router();
groupRouter.get('/api/group', groupController.listAll);
groupRouter.post('/api/group', groupController.save);
