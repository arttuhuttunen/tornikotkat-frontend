import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
//import './App.css';

import {Navbar, NavItem, Nav, Button, Container} from 'react-bootstrap';
import ViewContainer from './ViewContainer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/esittely'>
            <Esittely />
          </Route>
          <Route path='/lippukunta'>
            <Lippukunta />
          </Route>
          <Route path='/'>
            <Etusivu />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


function Etusivu() {
  return (
    <div>
      <ViewContainer>
      <h>Etusivu </h>
      </ViewContainer>
      
    </div>
  )
}

function Esittely() {
  return (
    <div>
      <ViewContainer>
      <h1>Esittely </h1>
      </ViewContainer>
    </div>
  )
}

function Lippukunta() {
  return (
    <div>
      <ViewContainer>
      <h1>Lippukunta </h1>
      </ViewContainer>
    </div>
  )
}

export default App;
