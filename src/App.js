import React from 'react';
import './App.css';

// Lib
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './Header';

function App() {
  return (
    <div className="App">

      <Router>
        {/* Header */}
        <Header />

        <Switch>
          <Route path="/">
            <p>i am home page</p>
          </Route>
        </Switch>

        <Switch>
          <Route path="/chat">
            <p>i am chat page</p>
          </Route>
        </Switch>

        {/* Tinder cards */}

        {/* Buttons */}

        {/* Chat screen */}

        {/* Individual chat */}

      </Router>
    </div>
  );
}

export default App;
