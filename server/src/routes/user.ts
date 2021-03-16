import { Router } from 'express';

import UserController from '../controllers/user.controller';

const UserRouter: Router = Router();
UserRouter.get('/user', UserController);

export default UserRouter;
