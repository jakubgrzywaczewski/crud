import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import ROUTES from '../common/constant';

export const ContextUserData = createContext({});

function UserContext(props: any) {
  const { children } = props;
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    axios.get(ROUTES.GET_USER, { withCredentials: true }).then((res: AxiosResponse) => {
      if (res.data) {
        setUserData(res.data);
      }
    });
  }, []);

  return <ContextUserData.Provider value={userData}>{children}</ContextUserData.Provider>;
}

export default UserContext;
