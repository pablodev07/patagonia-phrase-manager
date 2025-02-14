export const phraseReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_PHRASE':
        return [...state, action.payload];
      case 'DELETE_PHRASE':
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  };