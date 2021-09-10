import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';
import Header from './components/Header';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/details/:symbol">
          <DetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
