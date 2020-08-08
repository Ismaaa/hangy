import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Character = ({ value, addCharacterToList }) => {
  const { game } = useSelector((store) => store);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (game.usedCharacters.includes(value)) setIsDisabled(true);
  }, [game]);

  return (
    <button
      type="button"
      onClick={() => addCharacterToList(value)}
      className={`Character ${isDisabled ? 'Character--disabled' : ''}`}
    >
      {value}
    </button>
  );
};

Character.propTypes = {
  value: PropTypes.string.isRequired,
  addCharacterToList: PropTypes.func.isRequired,
};

export default Character;
