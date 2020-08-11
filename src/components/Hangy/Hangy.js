import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hangman from '../Hangman';
import Keyboard from '../Keyboard';
import GameOver from '../GameOver';
import Word from '../Word';
import { setWord } from '../../store/ducks/game';
import generateRandomWord from '../../utils/generateRandomWord';

const Hangy = () => {
  const dispatch = useDispatch();
  const { word, gameOver } = useSelector((store) => store.game);

  useEffect(() => {
    dispatch(setWord(generateRandomWord()));
  }, [dispatch]);

  const renderMainScreen = () => {
    if (!word) return <div />;
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
