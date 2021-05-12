import React from 'react';
import './App.css';
import HomePage from './components/homePage.js';
import FamiliarUser from './components/familiarUser.js';
import Registration from './components/registration.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/familiarUser">
              <FamiliarUser />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
