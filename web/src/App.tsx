import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/homepage/HomePage';
import LoginPage from './components/loginpage/LoginPage';

const App: React.FC = () => (
  <>
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  </>
);

export default App;
