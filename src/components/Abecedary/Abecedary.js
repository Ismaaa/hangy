import React from 'react';
import Character from '../Character';

const ABECEDARY = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const Abecedary = () => {
  const handleCharacterClick = (character) => {
    console.log(character);
  };
  return (
    <div className="Abecedary">
      {ABECEDARY.map((keyboardLine, key) => (
        <div key={key} className="Abecedary__keyboardLine">
          {keyboardLine.split('').map((character) => (
            <Character value={character} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Abecedary;
