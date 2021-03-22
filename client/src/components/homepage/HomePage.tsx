import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { UserContextType } from '../../types/types';
import HomePageWrapper from './HomePage.styles';

const HomePage: React.FC = () => {
  const { userData } = useContext(ContextUserData) as UserContextType;

  return (
    <HomePageWrapper>
      {userData.username ? <div>Hi, {userData.username}</div> : <div>Please Sing in.</div>}
    </HomePageWrapper>
  );
};

export default HomePage;
