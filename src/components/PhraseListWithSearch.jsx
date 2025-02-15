import React, { useContext } from 'react';
import withSearch from '../hocs/withSearch.jsx';
import { PhraseContext } from '../context/PhraseContext';
import PhraseList from './PhraseList';

const PhraseListWithSearch = withSearch(PhraseList);

export default () => {
  const { phrases, deletePhrase, editPhrase } = useContext(PhraseContext);
  return (
    <PhraseListWithSearch
      phrases={phrases}
      deletePhrase={deletePhrase}
      editPhrase={editPhrase}
    />
  );
};