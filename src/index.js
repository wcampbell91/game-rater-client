import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { GameRater } from './components/GameRater';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GameRater />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
