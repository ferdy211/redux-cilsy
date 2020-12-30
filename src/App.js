import React from 'react';
// import { Switch, Route } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './containers/login'
import Home from './containers/home';
import HomeIsLoggedIn from './containers/home';

function App() {

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home">
          <Home />
          <Link to="/">Log out</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
