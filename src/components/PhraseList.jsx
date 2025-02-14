import React from 'react';
import PhraseCard from './PhraseCard';

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

export default PhraseList;