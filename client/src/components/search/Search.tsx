import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import { ROUTES } from '../../common/constant';
import Movie from '../movie/Movie';
import { Input, Label, SerachWrapper } from './Search.styles';
import { IMovie } from '../../types/types';

const Search: React.FC = () => {
  const [movieData, setMovieData] = useState<IMovie>();
  const [input, setInput] = useState<string>('');

  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const debouncedFetch = debounce(async () => {
      axios
        .get<IMovie>(`${ROUTES.MOVIES_TITLE_API}${input}`, { withCredentials: true })
        .then((res: AxiosResponse) => {
          if (res.data) {
            const { Title, Director, Released, imdbID, Poster } = res.data;
            setMovieData({ Title, Director, Released, imdbID, Poster });
          }
        });
    }, 1500);

    debouncedFetch();
  }, [input]);

  return (
    <>
      <SerachWrapper>
        <Label>Search</Label>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          placeholder="Search for a movie..."
        />
      </SerachWrapper>

      <Movie {...movieData} />
    </>
  );
};

export default Search;
