import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import ROUTES from '../../common/constant';

interface IProps {
  movieIds: string[];
  user: string;
}

type Movie = {
  title: string;
  rating: string;
  id: string;
};

const Favourites = (props: IProps) => {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const { movieIds, user } = props;
  const ids = movieIds.filter((id) => id !== null);

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
    <div>
      {favourites?.map((movie) => (
        <p key={movie.id}>
          {movie.title} {movie.rating}
        </p>
      ))}
    </div>
  );
};

export default Favourites;
