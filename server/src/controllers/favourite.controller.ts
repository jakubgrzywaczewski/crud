import { Request, Response, NextFunction } from 'express';

import User from '../db/User';

const addMovieToFavorites = async (id: string, user: any): Promise<any> => {
  const query = { googleId: user.googleId };
  const newValue = { $push: { favourites: id } };

  User.updateOne(query, newValue)
    .then((obj) => {
      console.log('Updated - ' + obj);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
};

const FavouriteController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    user,
    body: { id },
  } = req;

  try {
    if (user) {
      await addMovieToFavorites(id, user);

      res.send(user);
    } else {
      res.send('Please sign in');
    }
  } catch (error) {
    next(error);
  }
};

export default FavouriteController;
