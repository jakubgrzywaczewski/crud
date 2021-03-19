import React from 'react';

import ROUTES from '../../common/constant';
import { LoginButton, LoginPageWrapper } from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    window.open(ROUTES.AUTH, '_self');
  };

  return (
    <LoginPageWrapper>
      <div>
        <LoginButton type="button" onClick={handleGoogleLogin}>
          Login with Google
        </LoginButton>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
