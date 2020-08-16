import React from 'react';
import './App.css';

// Lib
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './Header';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          
          {/* Individual chat */}
          <Route path="/chat/:person">
            {/* Header */}
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>


          {/* Chat screen */}
          <Route path="/chat">
            {/* Header */}
            <Header backButton="/" />
            <Chats />
          </Route>


          {/* Home screen */}
          <Route path="/">
            {/* Header */}
            <Header />
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
