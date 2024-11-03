// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import './App.css';

const App = () => {
  const [playerNames, setPlayerNames] = useState({ player1: '', player2: '' });

  return (
    <div className="app-container">
      {playerNames['player1'] === '' || playerNames['player2'] === ''
        ? <Home setPlayerNames={setPlayerNames} />
        : <Game playerNames={playerNames} />}
    </div>
  );
};

export default App;
