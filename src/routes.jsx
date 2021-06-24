import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home/Home';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;