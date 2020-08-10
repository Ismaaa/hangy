// constants
const INITIAL_STATE = {
  word: 'ISMAIL',
  usedCharacters: [],
  correctCharacters: [],
  incorrectCharacters: [],
  gameOver: false,
  gameWon: null,
};

const ADD_CHARACTER = 'ADD_CHARACTER';
const ADD_CORRECT_CHARACTER = 'ADD_CORRECT_CHARACTER';
const ADD_INCORRECT_CHARACTER = 'ADD_INCORRECT_CHARACTER';
const GAME_OVER = 'GAME_OVER';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CORRECT_CHARACTER:
      return {
        ...state,
        correctCharacters: [...state.correctCharacters, action.payload],
      };
    case ADD_INCORRECT_CHARACTER:
      return {
        ...state,
        incorrectCharacters: [...state.incorrectCharacters, action.payload],
      };
    case ADD_CHARACTER: {
      const { usedCharacters } = state;

      if (!usedCharacters.includes(action.payload))
        usedCharacters.push(action.payload);

      return { ...state, usedCharacters };
    }
    case GAME_OVER:
      return { ...state, gameOver: true, gameWon: action.payload };
    default:
      return state;
  }
}

// actions
export const addCorrectCharacter = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_CORRECT_CHARACTER,
    payload,
  });
};

export const addIncorrectCharacter = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_INCORRECT_CHARACTER,
    payload,
  });
};

// middleware
export const gameMiddleware = ({ dispatch, getState }) => (next) => (
  action,
) => {
  next(action);

  if (action.type === ADD_CHARACTER) {
    const { word, usedCharacters } = getState().game;
    const matches = [];

    word.split('').forEach((character) => {
      matches.push(usedCharacters.includes(character));
    });

    if (matches.every((match) => match === true)) {
      dispatch({
        type: GAME_OVER,
        payload: true,
      });
    }
  }
};
