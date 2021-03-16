import React from 'react';

import ROUTES from '../../common/constant';

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    window.open(ROUTES.AUTH, '_self');
  };

  return (
    <>
      <div>LoginPage</div>
      <div>
        <button type="button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <button type="button">Login with Facebook</button>
      </div>
    </>
  );
};

export default LoginPage;
