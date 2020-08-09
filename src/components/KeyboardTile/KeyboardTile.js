import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const KeyboardTile = ({ value, addCharacterToList }) => {
  const { game } = useSelector((store) => store);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (game.usedCharacters.includes(value)) setIsDisabled(true);
  }, [game, value]);

  return (
    <button
      type="button"
      onClick={() => addCharacterToList(value)}
      className={`KeyboardTile ${isDisabled ? 'KeyboardTile--disabled' : ''}`}
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
