import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';
import Navbar from './components/navbar/Navbar';
import ROUTES from './common/constant';
import PrivateRoute from './components/privateroute/PrivateRoute';
import MoviesPage from './components/moviespage/MoviesPage';

const App: React.FC = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTES.LOGIN_PAGE} component={LoginPage} />
        <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
        <PrivateRoute path={ROUTES.MOVIES_PAGE} component={MoviesPage} />
      </Switch>
    </Router>
  </>
);

export default App;
