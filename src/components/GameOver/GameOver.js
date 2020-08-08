import React from 'react';
import { useSelector } from 'react-redux';

const GameOver = () => {
  const { gameOver, gameWon } = useSelector((store) => store.game);

  if (!gameOver) return <div />;

  return (
    <div
      className={`GameOver ${
        gameWon ? 'GameOver--primary' : 'GameOver--warning'
      }`}
    >
      <h1
        className={`GameOver__title ${
          gameWon ? 'GameOver__title--secondary' : 'GameOver__title--warning'
        }`}
      >
        {gameWon ? 'YOU WON' : 'YOU LOST'}
      </h1>
    </div>
  );
};

export default GameOver;
