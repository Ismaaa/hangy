import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UsedCharacter = ({ character }) => {
  const { word } = useSelector((store) => store.game);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (word.includes(character)) setIsCorrect(true);
  }, [word]);

  return (
    <span
      className={`UsedCharacter ${
        isCorrect ? 'UsedCharacter--primary' : 'UsedCharacter--warning'
      }`}
    >
      {character}
    </span>
  );
};

export default UsedCharacter;
