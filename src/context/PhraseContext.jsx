import React, { useReducer, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
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

  const editPhrase = (index, editedPhrase) => {
    dispatch({ type: 'EDIT_PHRASE', payload: { index, editedPhrase } });
  };

  const value = useMemo(
    () => ({
      phrases,
      addPhrase,
      deletePhrase,
      editPhrase,
    }),
    [phrases]
  );

  return (
    <PhraseContext.Provider value={value}>
      {children}
    </PhraseContext.Provider>
  );
};

PhraseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};