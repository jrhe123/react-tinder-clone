import React from 'react';
import './App.css';

// Lib
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>

        {/* Header */}
        <Header />

        <Switch>
          {/* Chat screen */}
          {/* Individual chat */}
          <Route path="/chat">
            <p>i am chat page</p>
          </Route>

          <Route path="/">
            {/* Tinder cards */}
            <TinderCards />
            {/* Buttons */}
            <SwipeButtons />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
