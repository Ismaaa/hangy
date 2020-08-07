import React from 'react';
import Character from '../Character';

const ABECEDARY = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const Abecedary = () => {
  return (
    <div className="Abecedary">
      {ABECEDARY.map((keyboardLine) => (
        <div key={keyboardLine} className="Abecedary__keyboardLine">
          {keyboardLine.split('').map((character) => (
            <Character value={character} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Abecedary;
