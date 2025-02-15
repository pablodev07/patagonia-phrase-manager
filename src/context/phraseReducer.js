export const phraseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PHRASE':
      return [...state, action.payload];
    case 'DELETE_PHRASE':
      return state.filter((_, i) => i !== action.payload);
    case 'EDIT_PHRASE':
      return state.map((phrase, i) =>
        i === action.payload.index ? action.payload.editedPhrase : phrase
      );
    default:
      return state;
  }
};