import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';
import Search from '../search/Search';
import PageWrapper from './Movies.styles';

const MoviesPage: React.FC = () => {
  const userData = useContext(ContextUserData) as IUser;

  return (
    <PageWrapper>
      <div>
        <Search />
      </div>
      <div>
        Favourites:
        <br />
        {userData?.favourites?.map((favourite) => favourite)}
      </div>
    </PageWrapper>
  );
};

export default MoviesPage;
