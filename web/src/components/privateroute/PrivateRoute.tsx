import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ROUTES from '../../common/constant';

import { ContextUserData } from '../../context/UserContext';
import { IUser } from '../../types/types';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact?: boolean;
}> = (props) => {
  const userData = useContext(ContextUserData) as IUser;

  return userData ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to={ROUTES.LOGIN} />
  );
};
export default PrivateRoute;
