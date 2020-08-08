import React from 'react';
import { useSelector } from 'react-redux';

const Word = () => {
  const { word, usedCharacters } = useSelector((store) => store.game);

  return (
    <div className="Word">
      {word.split('').map((character) => (
        <span className="Word__character">
          {usedCharacters.includes(character) ? character : '_'}
        </span>
      ))}
    </div>
  );
};

export default Word;
