import axios from 'axios';
import React from 'react';

import { IMovie } from '../../types/types';
import Poster from '../poster/Poster';
import { FavouriteButton, MovieWrapper } from './Movie.styles';
import ROUTES from '../../common/constant';

const Movie: React.FC<IMovie> = (props: IMovie) => {
  const { Title, Director, Released, imdbID, Poster: url } = props;

  const addToFavorites = async () => {
    axios.post(
      ROUTES.MOVIES_FAVOURITE_API,
      {
        id: imdbID,
      },
      { withCredentials: true },
    );
  };

  return imdbID ? (
    <MovieWrapper>
      <Poster url={url} />
      <p>{Title}</p>
      <p>Director: {Director}</p>
      <p>Released: {Released}</p>
      <p>
        <FavouriteButton onClick={addToFavorites}>Add to favourites</FavouriteButton>
      </p>
    </MovieWrapper>
  ) : null;
};
export default Movie;
