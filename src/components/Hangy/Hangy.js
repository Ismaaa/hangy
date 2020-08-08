import React from 'react';
import Hangman from '../Hangman';
import Abecedary from '../Keyboard';
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
      <Abecedary />
    </div>
  );
};

export default Hangy;
