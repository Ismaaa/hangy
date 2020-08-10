import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const KeyboardTile = ({ value, addCharacterToList }) => {
  const { correctCharacters, incorrectCharacters } = useSelector(
    (store) => store.game,
  );
  const [classModifier, setClassModifier] = useState('');

  useEffect(() => {
    if (correctCharacters.includes(value))
      setClassModifier('KeyboardTile--correct');
    if (incorrectCharacters.includes(value))
      setClassModifier('KeyboardTile--incorrect');
  }, [value, correctCharacters, incorrectCharacters]);

  return (
    <button
      type="button"
      onClick={() => addCharacterToList(value)}
      className={`KeyboardTile ${classModifier}`}
    >
      {value}
    </button>
  );
};

KeyboardTile.propTypes = {
  value: PropTypes.string.isRequired,
  addCharacterToList: PropTypes.func.isRequired,
};

export default KeyboardTile;
