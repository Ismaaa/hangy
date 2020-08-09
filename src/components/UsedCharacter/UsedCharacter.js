import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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

UsedCharacter.propTypes = {
  character: PropTypes.string.isRequired,
};

export default UsedCharacter;
