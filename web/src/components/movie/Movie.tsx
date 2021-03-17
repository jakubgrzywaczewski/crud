import React from 'react';

import { IMovie } from '../../types/types';
import Poster from '../poster/Poster';
import MovieWrapper from './Movie.styles';

const Movie: React.FC<IMovie> = (props: IMovie) => {
  const { Title, Year, Released, imdbID, Poster: url } = props;

  return (
    <MovieWrapper>
      <Poster url={url} />
      <p>{Title}</p>
      <p>{Year}</p>
      <p>{Released}</p>
      <p>{imdbID}</p>
    </MovieWrapper>
  );
};
export default Movie;
