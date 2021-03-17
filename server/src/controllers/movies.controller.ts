import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

import { getQueryStringWithTitle } from '../common/helper';

const getMoviesByTitle = async (title: string): Promise<any> => {
  const query = getQueryStringWithTitle(title);

  return axios
    .get(query)
    .then((res: AxiosResponse) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const MoviesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {
    user,
    query: { title },
  } = req;

  try {
    if (user) {
      const result = await getMoviesByTitle(`${title}`);

      res.send(result);
    } else {
      res.send('Please sign in');
    }
  } catch (error) {
    next(error);
  }
};

export default MoviesController;
