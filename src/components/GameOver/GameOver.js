import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { normalizeText } from 'normalize-text';

const GameOver = () => {
  const { gameWon } = useSelector((store) => store.game);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      reloadPage();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keypress', handleEnterKeyPress);
    };
  }, []);

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
      <button type="button" className="GameOver__button" onClick={reloadPage}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
