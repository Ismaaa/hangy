import React from 'react';
import { useSelector } from 'react-redux';
import Hangman from '../Hangman';
import Keyboard from '../Keyboard';
import GameOver from '../GameOver';
import Word from '../Word';

const Hangy = () => {
  const { gameOver, gameWon } = useSelector((store) => store.game);

  const renderMainScreen = () => {
    if (gameOver) return <GameOver />;

    return (
      <>
        <Hangman />
        <Word />
        <Keyboard />
      </>
    );
  };

  return <div className="Hangy">{renderMainScreen()}</div>;
};

export default Hangy;
