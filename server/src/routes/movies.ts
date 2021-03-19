import { Router } from 'express';

import FavouriteController from '../controllers/favourite.controller';
import FavouritesGetController from '../controllers/favourites.get.controller';
import MoviesController from '../controllers/movies.controller';

const MoviesRouter: Router = Router();
MoviesRouter.post('/movies/add:id', FavouriteController);
MoviesRouter.post('/movies/get:ids', FavouritesGetController);
MoviesRouter.get('/movies/:search', MoviesController);

export default MoviesRouter;
