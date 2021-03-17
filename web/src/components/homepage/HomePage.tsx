import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';
import HomePageWrapper from './HomePage.styles';

const HomePage: React.FC = () => {
  const userData = useContext(ContextUserData) as IUser;

  return (
    <HomePageWrapper>
      {userData ? <div>Hi, {userData.username}</div> : <div>Please Sing in.</div>}
    </HomePageWrapper>
  );
};

export default HomePage;
