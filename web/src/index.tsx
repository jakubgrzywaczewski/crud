import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import UserContext from './context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
