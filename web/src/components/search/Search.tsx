/* eslint-disable react/jsx-props-no-spreading */
import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

import ROUTES from '../../common/constant';
import Movie from '../movie/Movie';
import { Button, Form, Input } from './Search.styles';

const Search: React.FC = () => {
  const [movieData, setMovieData] = useState<any>();
  const [input, setInput] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);
  const inputFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchAPI() {
      axios
        .get(`${ROUTES.MOVIES_TITLE_API}${input}`, { withCredentials: true })
        .then((res: AxiosResponse) => {
          if (res.data) {
            console.log(res.data);
            setMovieData(res.data);
          }
        });
    }
    fetchAPI();
  }, [input]);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
  };
  return (
    <>
      <Form
        onClick={() => inputFocus?.current?.focus()}
        onFocus={() => inputFocus?.current?.focus()}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit">Search</Button>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          placeholder="Search for a movie..."
        />
      </Form>

      <Movie {...movieData} />
    </>
  );
};

export default Search;
