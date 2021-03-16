import React from 'react';
import { Link } from 'react-router-dom';

import StyledNavbar from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <>
      <StyledNavbar>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
