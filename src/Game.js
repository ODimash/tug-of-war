// src/Game.js
import React, { useState } from 'react';
import './Game.css';

const Game = ({ playerNames }) => {
  const [ropePosition, setRopePosition] = useState(50); // Позиция каната в центре
  const step = 5;
  const maxPosition = 20; // Максимальная позиция для победы

  const handlePullPlayer1 = () => {
    if (ropePosition > 50 - maxPosition) { // 50 - центр, maxPosition - предел
      setRopePosition(ropePosition - step);
    }
  };

  const handlePullPlayer2 = () => {
    if (ropePosition < 50 + maxPosition) { // 50 - центр, maxPosition - предел
      setRopePosition(ropePosition + step);
    }
  };

  const checkWinner = () => {
    if (ropePosition >= 50 + maxPosition) {
      return `${playerNames.player1} Жеңді!`; // Player 1 Wins!
    } else if (ropePosition <= 50 - maxPosition) {
      return `${playerNames.player2} Жеңді!`; // Player 2 Wins!
    }
    return null;
  };

  const winner = checkWinner();

  return (
    <div className="game-container">
      <h1 className="game-title">Арқан тартыс</h1>
      <div className="rope-container" style={{ left: `${ropePosition}%` }}>
        <img
          src={'player.png'}
          className="player player1"
          alt="Player 1"
        />
        <div className="rope"></div>
        <img
          src={'player.png'}
          className="player player2"
          style={{ transform: 'scaleX(-1)' }}
          alt="Player 2"
        />
      </div>
      <div className="center-line" />
      <div className="controls">
        <button onClick={handlePullPlayer1} disabled={winner}>
          {playerNames.player1} Тарту
        </button>
        <button onClick={handlePullPlayer2} disabled={winner}>
          {playerNames.player2} Тарту
        </button>
      </div>
      {winner && <div className="winner">{winner}</div>}
    </div>
  );
};

export default Game;
