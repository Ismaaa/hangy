import React from 'react';
import { useSelector } from 'react-redux';
import UsedCharacter from '../UsedCharacter';

const UsedCharacters = () => {
  const { usedCharacters } = useSelector((store) => store.game);

  return (
    <div className="UsedCharacters">
      {usedCharacters.map((character) => (
        <UsedCharacter key={character} character={character} />
      ))}
    </div>
  );
};

export default UsedCharacters;
