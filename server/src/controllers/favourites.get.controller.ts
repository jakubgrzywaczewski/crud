import { Response, Request, NextFunction } from 'express';
import axios from 'axios';

import { getQueryStringWithId } from '../common/helper';

interface IResponse {
  title: string;
  imdbRating: string;
}

const getFavorites = async (ids: string[]): Promise<IResponse[]> => {
  const result = [];

  await Promise.all(
    ids.map(async (movieId) => {
      const query = getQueryStringWithId(movieId);
      const {
        data: { Title, imdbRating },
      } = await axios.get(query);
      const data = Object.assign({}, { title: Title, rating: imdbRating });

      return result.push(data);
    }),
  );

  return result;
};

const FavouritesGetController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    body: { ids, user },
  } = req;

  try {
    if (user) {
      const result = await getFavorites(ids);

      res.send(result);
    } else {
      res.send('Please sign in');
    }
  } catch (error) {
    next(error);
  }
};

export default FavouritesGetController;
