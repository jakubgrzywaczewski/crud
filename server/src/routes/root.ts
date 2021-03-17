import { Router } from 'express';

import RootController from '../controllers/root.controller';

const RootRouter: Router = Router();
RootRouter.get('http://localhost:5000/', RootController);

export default RootRouter;
