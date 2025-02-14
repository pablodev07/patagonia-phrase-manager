import React, { useContext } from 'react';
import withSearch from '../hocs/withSearch.jsx';
import { PhraseContext } from '../context/PhraseContext';
import PhraseCard from './PhraseCard.jsx';

const PhraseList = ({ phrases, deletePhrase }) => {
  return (
    <div className="phrase-list">
      {phrases.map((phrase, index) => (
        <PhraseCard
          key={index}
          phrase={phrase}
          onDelete={() => deletePhrase(index)}
        />
      ))}
    </div>
  );
};

const PhraseListWithSearch = withSearch(PhraseList);

export default () => {
  const { phrases, deletePhrase } = useContext(PhraseContext);
  return <PhraseListWithSearch phrases={phrases} deletePhrase={deletePhrase} />;
};