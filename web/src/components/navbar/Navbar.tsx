import React, { useContext } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

import ROUTES from '../../common/constant';
import StyledNavbar from './Navbar.styles';
import { IUser } from '../../types/types';
import { ContextUserData } from '../../context/UserContext';

const Navbar: React.FC = () => {
  const userData = useContext(ContextUserData) as IUser;

  const logout = () =>
    axios.get(ROUTES.LOGOUT_USER, { withCredentials: true }).then((res: AxiosResponse) => {
      if (res.data === 'OK') {
        window.location.href = ROUTES.ROOT;
      }
    });

  return (
    <>
      <StyledNavbar>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        {userData ? (
          <div>
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <div onClick={logout} onKeyDown={logout} role="button" tabIndex={0}>
            Logout
          </div>
        )}
      </StyledNavbar>
    </>
  );
};

export default Navbar;
