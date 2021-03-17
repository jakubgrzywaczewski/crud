import { Router } from 'express';

import FavouriteController from '../controllers/favourite.controller';
import MoviesController from '../controllers/movies.controller';

const MoviesRouter: Router = Router();
MoviesRouter.post('/movies/add:id', FavouriteController);
MoviesRouter.get('/movies/:search', MoviesController);

export default MoviesRouter;
