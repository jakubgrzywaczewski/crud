import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { ROUTES } from '../../common/constant';
import { FavouritesWrapper, MovieCard } from './Favourites.styles';

interface IProps {
  movieIds: string[];
  user: string;
}

type Movie = {
  title: string;
  rating: string;
  id: string;
};

const Favourites = (props: IProps): JSX.Element => {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const { movieIds, user } = props;
  const ids = movieIds?.filter((id) => id !== null);

  useEffect(() => {
    axios
      .post(ROUTES.MOVIES_GET_FAVOURITES_API, {
        withCredentials: true,
        ids,
        user,
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setFavourites(res.data);
        }
      });
  }, [movieIds]);

  return (
    <FavouritesWrapper>
      {favourites?.map((movie) => (
        <MovieCard key={movie.id}>
          {movie.title} {movie.rating}
        </MovieCard>
      ))}
    </FavouritesWrapper>
  );
};

export default Favourites;
