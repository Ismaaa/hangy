import React from 'react';
import Hangman from '../Hangman';
import Keyboard from '../Keyboard';
import UsedCharacters from '../UsedCharacters';
import GameOver from '../GameOver';
import Word from '../Word';

const Hangy = () => {
  return (
    <div className="Hangy">
      <GameOver />
      <UsedCharacters />
      <Hangman />
      <Word />
      <Keyboard />
    </div>
  );
};

export default Hangy;
