import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Character = ({ value, usedCharacters, addCharacterToList }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (usedCharacters.includes(value)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [value, usedCharacters]);

  const handleCharacterClick = () => {
    setIsDisabled(true);
    addCharacterToList(value);
  };

  return (
    <div
      onClick={() => handleCharacterClick(value)}
      className={`Character ${isDisabled ? 'Character--disabled' : ''}`}
    >
      {value}
    </div>
  );
};

Character.propTypes = {
  value: PropTypes.string.isRequired,
  usedCharacters: PropTypes.array.isRequired,
};

export default Character;
