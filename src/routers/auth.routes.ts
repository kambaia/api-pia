import { Router } from 'express';
export const authRouter = router();
/********************************authintication ************************ */
authRouter.post('/api/session', authUsersController.authintication);
