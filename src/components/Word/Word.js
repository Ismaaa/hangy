/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

const Word = () => {
  const { word, correctCharacters } = useSelector((store) => store.game);

  return (
    <div className="Word">
      {word.split('').map((character, index) => (
        <span key={`${character}${index}`} className="Word__character">
          {correctCharacters.includes(character) ? character : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
