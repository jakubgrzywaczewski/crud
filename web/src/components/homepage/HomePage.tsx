import React, { useContext } from 'react';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';

const HomePage: React.FC = () => {
  const userData = useContext(ContextUserData) as IUser;

  return userData ? <div>Hi, {userData.username}</div> : <div>Please Sing in.</div>;
};

export default HomePage;
