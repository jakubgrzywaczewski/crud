import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import { ROUTES } from '../common/constant';
import { IUser, UserContextType } from '../types/types';

const contextDefaultValues: UserContextType = {
  userData: {} as IUser,
  updateUserData: () => {},
};

export const ContextUserData = createContext<UserContextType>(contextDefaultValues);

function UserContext(props: any) {
  const { children } = props;
  const [userData, setUserData] = useState<IUser>(contextDefaultValues.userData);

  const updateUserData = (id: string) => {
    setUserData({ ...userData, favourites: [...userData.favourites, id] });
  };

  useEffect(() => {
    axios.get(ROUTES.GET_USER, { withCredentials: true }).then((res: AxiosResponse<IUser>) => {
      if (res.data) {
        setUserData(res.data);
      }
    });
  }, []);

  return (
    <ContextUserData.Provider value={{ userData, updateUserData }}>
      {children}
    </ContextUserData.Provider>
  );
}

export default UserContext;
