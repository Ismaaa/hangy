import React from 'react';
import Hangman from '../Hangman';
import Abecedary from '../Keyboard';
import UsedCharacters from '../UsedCharacters';
import GameOver from '../GameOver';

const Hangy = () => (
  <div className="Hangy">
    <GameOver />
    <UsedCharacters />
    <Hangman />
    <Abecedary />
  </div>
);

export default Hangy;
