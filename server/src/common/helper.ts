import ROUTES from './constants';
import { IMDB_API_KEY } from './env';

export const getQueryStringWithTitle = (title: string): string => {
  return `${ROUTES.IMDB_API}?t=${title}&apikey=${IMDB_API_KEY}`;
};

export const getQueryStringWithId = (id: string): string => {
  return `${ROUTES.IMDB_API}?i=${id}&apikey=${IMDB_API_KEY}`;
};
