import React, { useCallback, useEffect } from 'react';
import { normalizeText } from 'normalize-text';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardTile from '../KeyboardTile';
import {
  addCorrectCharacter,
  addIncorrectCharacter,
} from '../../store/ducks/game';

const ABECEDARY = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
const FLATTEN_ABECEDARY = ABECEDARY.join('');

const Keyboard = () => {
  const dispatch = useDispatch();
  const { word, correctCharacters, incorrectCharacters } = useSelector(
    (store) => store.game,
  );

  const addCharacterToList = useCallback(
    (character) => {
      // checks
      if (character === '') return;
      if (!FLATTEN_ABECEDARY.includes(character)) return;
      if (correctCharacters.includes(character)) return;
      if (incorrectCharacters.includes(character)) return;

      //
      if (word.includes(character)) {
        dispatch(addCorrectCharacter(character));
      } else {
        dispatch(addIncorrectCharacter(character));
      }
    },
    [dispatch, word, correctCharacters, incorrectCharacters],
  );

  const handleKeyPress = useCallback(
    (event) => {
      const normalizedCharacter = normalizeText(event.key).toUpperCase();

      addCharacterToList(normalizedCharacter);
    },
    [addCharacterToList],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="Keyboard">
      {ABECEDARY.map((keyboardLine) => (
        <div key={keyboardLine} className="Keyboard__keyboardLine">
          {keyboardLine.split('').map((character) => (
            <KeyboardTile
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
