import React from 'react';

const Hangman = () => (
  <div className="Hangman">
    <span className="Hangman__footer" />
    <span className="Hangman__bar--main" />
    <span className="Hangman__bar--top" />
    <span className="Hangman__bar--rope" />
    <span className="Hangman__person--head" />
    <span className="Hangman__person--body" />
    <span className="Hangman__person--leftArm" />
    <span className="Hangman__person--rightArm" />
    <span className="Hangman__person--leftLeg" />
    <span className="Hangman__person--rightLeg" />
    <span className="Hangman__person--diagonal" />
  </div>
);

export default Hangman;
