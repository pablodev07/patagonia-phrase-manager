import React from 'react';
import PhraseCard from './PhraseCard';

const PhraseList = ({ phrases, deletePhrase, editPhrase }) => {
  return (
    <div className="phrase-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {phrases.map((phrase, index) => (
        <PhraseCard
          key={index}
          phrase={phrase}
          onDelete={() => deletePhrase(index)}
          onEdit={(editedPhrase) => editPhrase(index, editedPhrase)}
        />
      ))}
    </div>
  );
};

export default PhraseList;