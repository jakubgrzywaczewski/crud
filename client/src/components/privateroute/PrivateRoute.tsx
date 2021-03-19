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
  const { component, exact, path } = props;
  const userData = useContext(ContextUserData) as IUser;

  return userData ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to={ROUTES.LOGIN_PAGE} />
  );
};
export default PrivateRoute;
