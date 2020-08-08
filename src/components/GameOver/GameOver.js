import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const GameOver = () => {
  const { gameOver, gameWon } = useSelector((store) => store.game);

  if (!gameOver) return <div />;

  return (
    <div className="GameOver">
      <h1 className="GameOver__title">{gameWon ? 'WINNER !!!' : 'YOU LOST'}</h1>
    </div>
  );
};

export default GameOver;
