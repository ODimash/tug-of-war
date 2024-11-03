// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import './App.css';

const App = () => {
  const [playerNames, setPlayerNames] = useState({ player1: '', player2: '' });

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home setPlayerNames={setPlayerNames} />} />
          <Route path="/game" element={<Game playerNames={playerNames} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
