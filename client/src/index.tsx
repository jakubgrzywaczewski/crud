import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './components/global/Global';
import UserContext from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <GlobalStyle />
      <App />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
