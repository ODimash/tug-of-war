// src/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setPlayerNames }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerNames({ player1, player2 });
    navigate('/game');
  };

  return (
    <div className="home-container">
      <h1>Добро пожаловать в Арқан тартыс!</h1>
      <img src="tug-of-war.png" alt="Tug of War" className="home-image" />
      <form className="player-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="player1">Имя игрока 1:</label>
          <input
            type="text"
            id="player1"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="player2">Имя игрока 2:</label>
          <input
            type="text"
            id="player2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            required
          />
        </div>
        <button style={{marginTop: 20}} type="submit">Начать игру</button>
      </form>
    </div>
  );
};

export default Home
