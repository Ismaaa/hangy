import React, { useEffect, useState } from 'react';
import { normalizeText } from 'normalize-text';
import Character from '../Character';

const ABECEDARY = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const Keyboard = () => {
  const [usedCharacters, setUsedCharacters] = useState([]);

  console.log(usedCharacters);

  const addCharacterToList = (character) => {
    if (usedCharacters.includes(character)) return;

    setUsedCharacters((previousUsedCharacters) => [
      ...previousUsedCharacters,
      character,
    ]);
  };

  const handleKeyPress = (event) => {
    const normalizedCharacter = normalizeText(event.key).toUpperCase();

    addCharacterToList(normalizedCharacter);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="Keyboard">
      {ABECEDARY.map((keyboardLine) => (
        <div key={keyboardLine} className="Keyboard__keyboardLine">
          {keyboardLine.split('').map((character) => (
            <Character
              key={character}
              value={character}
              usedCharacters={usedCharacters}
              addCharacterToList={addCharacterToList}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
