// constants
const INITIAL_STATE = {
  word: null,
  usedCharacters: [],
};

const ADD_CHARACTER = 'ADD_CHARACTER';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CHARACTER: {
      const { usedCharacters } = state;

      if (!usedCharacters.includes(action.payload))
        usedCharacters.push(action.payload);

      return { ...state, usedCharacters };
    }
    default:
      return state;
  }
}

// actions
export const addCharacter = (payload) => async (dispatch) => {
  dispatch({
    type: ADD_CHARACTER,
    payload,
  });
};
