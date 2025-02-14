import React from 'react';

const PhraseCard = ({ phrase, onDelete }) => {
  return (
    <div className="phrase-card">
      <p>{phrase}</p>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default PhraseCard;