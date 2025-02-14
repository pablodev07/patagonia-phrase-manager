import React, { useContext } from 'react';
import PhraseCard from './PhraseCard';
import { PhraseContext } from '../context/PhraseContext';

const PhraseList = () => {
  const { phrases, deletePhrase } = useContext(PhraseContext);

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

export default PhraseList;