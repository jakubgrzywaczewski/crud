import { Router } from 'express';

import MoviesController from '../controllers/movies.controller';

const MoviesRouter: Router = Router();
MoviesRouter.get('/movies/:search', MoviesController);

export default MoviesRouter;
