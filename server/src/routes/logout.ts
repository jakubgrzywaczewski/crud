import { Router } from 'express';

import LogoutController from '../controllers/logout.controller';
import ROUTES from '../common/constants';

const LogoutRouter: Router = Router();
LogoutRouter.get(ROUTES.LOGOUT, LogoutController);

export default LogoutRouter;
