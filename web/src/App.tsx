import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';
import Navbar from './components/navbar/Navbar';
import ROUTES from './common/constant';
import PrivateRoute from './components/privateroute/PrivateRoute';

const App: React.FC = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.ROOT} exact component={HomePage} />
        <PrivateRoute path={ROUTES.ROOT} component={LoginPage} />
      </Switch>
    </Router>
  </>
);

export default App;
