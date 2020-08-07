import React, { useState } from 'react';

const Character = ({ value }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleCharacterClick = () => {
    setIsDisabled(true);
    console.log(value);
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

export default Character;
