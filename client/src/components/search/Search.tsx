import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { ROUTES } from '../../common/constant';
import useDebounce from '../../common/useDebounce';
import Movie from '../movie/Movie';
import { Input, Label, SerachWrapper } from './Search.styles';
import { IMovie } from '../../types/types';

const Search: React.FC = () => {
  const [movieData, setMovieData] = useState<IMovie>();
  const [inputValue, setInputValue] = useState<string>('');

  const inputFocus = useRef<HTMLInputElement>(null);
  const debouncedValue = useDebounce(inputValue, 1500);

  useEffect(() => {
    const debouncedFetch = async () => {
      axios
        .get<IMovie>(`${ROUTES.MOVIES_TITLE_API}${debouncedValue}`, { withCredentials: true })
        .then((res: AxiosResponse) => {
          if (res.data) {
            const { Title, Director, Released, imdbID, Poster } = res.data;
            setMovieData({ Title, Director, Released, imdbID, Poster });
          }
        });
    };

    debouncedFetch();
  }, [debouncedValue]);

  return (
    <>
      <SerachWrapper>
        <Label>Search</Label>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          ref={inputFocus}
          value={inputValue}
          placeholder="Search for a movie..."
        />
      </SerachWrapper>

      <Movie {...movieData} />
    </>
  );
};

export default Search;
