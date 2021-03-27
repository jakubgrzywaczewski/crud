import React, { useContext } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../common/constant';
import { LogoutButton, StyledNavbar } from './Navbar.styles';
import { UserContextType } from '../../types/types';
import { ContextUserData } from '../../context/UserContext';

const Navbar: React.FC = () => {
  const { userData } = useContext(ContextUserData) as UserContextType;

  const logout = () =>
    axios.get(ROUTES.LOGOUT_USER, { withCredentials: true }).then((res: AxiosResponse) => {
      if (res.data === 'OK') {
        window.location.href = ROUTES.HOME_PAGE;
      }
    });

  return (
    <>
      <StyledNavbar>
        <Link to={ROUTES.HOME_PAGE}>
          <div>Homepage</div>
        </Link>

        {userData.username ? (
          <Link to={ROUTES.MOVIES_PAGE}>
            <div>Movies</div>
          </Link>
        ) : null}
        {!userData.username ? (
          <Link to={ROUTES.LOGIN_PAGE}>
            <div>Login</div>
          </Link>
        ) : (
          <LogoutButton onClick={logout} onKeyDown={logout} role="button" tabIndex={0}>
            Logout
          </LogoutButton>
        )}
      </StyledNavbar>
    </>
  );
};

export default Navbar;
