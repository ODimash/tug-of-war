// src/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setPlayerNames }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerNames({ player1, player2 });
  };

  return (
    <div className="home-container">
      <h1>«Арқан тартыс» интеллектуалды сайысы</h1>
      <img src="tug-of-war.png" alt="Tug of War" className="home-image" />
      <form className="player-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player1">1-ші ойыншы:</label>
          <input
            type="text"
            id="player1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="player2">2-ші ойыншы:</label>
          <input
            type="text"
            id="player2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
          />
        </div>
        <button style={{marginTop: 20}} type="submit">Сайысты бастау</button>
      </form>
    </div>
  );
};

export default Home
