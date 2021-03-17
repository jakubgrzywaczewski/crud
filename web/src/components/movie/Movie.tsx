import axios from 'axios';
import React from 'react';

import { IMovie } from '../../types/types';
import Poster from '../poster/Poster';
import MovieWrapper from './Movie.styles';
import ROUTES from '../../common/constant';

const Movie: React.FC<IMovie> = (props: IMovie) => {
  const { Title, Year, Released, imdbID, Poster: url } = props;

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
      <p>{Year}</p>
      <p>{Released}</p>
      <p>
        <button type="button" onClick={addToFavorites}>
          Add to favourites
        </button>
      </p>
    </MovieWrapper>
  ) : null;
};
export default Movie;
