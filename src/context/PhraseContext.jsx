import React, { useReducer, createContext } from 'react';
import { phraseReducer } from './phraseReducer';

export const PhraseContext = createContext();

export const PhraseProvider = ({ children }) => {
  const [phrases, dispatch] = useReducer(phraseReducer, []);

  const addPhrase = (phrase) => {
    dispatch({ type: 'ADD_PHRASE', payload: phrase });
  };

  const deletePhrase = (index) => {
    dispatch({ type: 'DELETE_PHRASE', payload: index });
  };

  return (
    <PhraseContext.Provider value={{ phrases, addPhrase, deletePhrase }}>
      {children}
    </PhraseContext.Provider>
  );
};