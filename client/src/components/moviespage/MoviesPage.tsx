import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';
import Favourites from '../favourites/Favourites';
import Search from '../search/Search';
import PageWrapper from './MoviesPage.styles';

const MoviesPage: React.FC = () => {
  const { userData } = useContext(ContextUserData);
  const { favourites, googleId } = userData as IUser;

  return (
    <PageWrapper>
      <div>
        <Search />
      </div>
      <div>
        Favourites:
        <br />
        <Favourites movieIds={favourites} user={googleId} />
      </div>
    </PageWrapper>
  );
};

export default MoviesPage;
