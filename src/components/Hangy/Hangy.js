import React from 'react';
import Hangman from '../Hangman';
import Keyboard from '../Keyboard';
import GameOver from '../GameOver';
import Word from '../Word';

const Hangy = () => {
  return (
    <div className="Hangy">
      <GameOver />
      <Hangman />
      <Word />
      <Keyboard />
    </div>
  );
};

export default Hangy;
