import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';
import Navbar from './components/navbar/Navbar';
import ROUTES from './common/constant';
import { ContextUserData } from './context/UserContext';

const App: React.FC = () => {
  const userData = useContext(ContextUserData);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path={ROUTES.ROOT} exact component={HomePage} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
