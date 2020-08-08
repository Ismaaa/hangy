import React, { useEffect } from 'react';
import { normalizeText } from 'normalize-text';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../Character';
import { addCharacter } from '../../store/ducks/game';

const ABECEDARY = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
const FLATTEN_ABECEDARY = ABECEDARY.join('');

const Keyboard = () => {
  const dispatch = useDispatch();
  const { usedCharacters } = useSelector((store) => store.game);

  const addCharacterToList = (character) => {
    if (!FLATTEN_ABECEDARY.includes(character)) return;
    if (usedCharacters.includes(character)) return;

    dispatch(addCharacter(character));
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
              addCharacterToList={addCharacterToList}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
