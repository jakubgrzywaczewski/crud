import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';

const MoviesPage: React.FC = () => {
  const userData = useContext(ContextUserData) as IUser;

  return <>{userData?.favourites?.map((favourite) => favourite)}</>;
};

export default MoviesPage;
