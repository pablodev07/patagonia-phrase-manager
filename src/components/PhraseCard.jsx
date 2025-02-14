import React from 'react';

const PhraseCard = ({ phrase, onDelete }) => {
  return (
    <div className="phrase-card">
      <p className="text-xl font-bold text-red-500">{phrase}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default PhraseCard;