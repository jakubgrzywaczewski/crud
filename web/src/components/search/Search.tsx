import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';

import { Button, Form, Input } from './Search.styles';

const Search: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const inputFocus = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput('');
    console.log(`Form was submited with input: ${input}`);
  };
  return (
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
  );
};

export default Search;
