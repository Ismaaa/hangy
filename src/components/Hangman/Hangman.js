import React from 'react';
import { useSelector } from 'react-redux';

const HANGMAN_DRAWING = [
  'Hangman__footer',
  'Hangman__bar--main',
  'Hangman__bar--top',
  'Hangman__bar--diagonal',
  'Hangman__bar--rope',
  'Hangman__person--head',
  'Hangman__person--body',
  'Hangman__person--leftArm',
  'Hangman__person--rightArm',
  'Hangman__person--leftLeg',
  'Hangman__person--rightLeg',
];

const Hangman = () => {
  const { incorrectCharacters } = useSelector((store) => store.game);

  const renderHangmanParts = () => {
    return incorrectCharacters.map((character, index) => (
      <span className={`${HANGMAN_DRAWING[index]}`} />
    ));
  };

  return <div className="Hangman">{renderHangmanParts()}</div>;
};

export default Hangman;
