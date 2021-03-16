import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  </>
);

export default App;
