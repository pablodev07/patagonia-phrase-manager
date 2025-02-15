import React, { useState, useContext } from 'react';
import { PhraseContext } from '../context/PhraseContext';

const PhraseForm = () => {
  const [phrase, setPhrase] = useState('');
  const { addPhrase } = useContext(PhraseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase.trim()) {
      addPhrase(phrase);
      setPhrase('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="phraseForm">
      <input
        type="text"
        placeholder="Agregar una frase..."
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        className="rounded border border-gray-300 p-5"
      />
      <button className="text-white" type="submit">Agregar</button>
    </form>
  );
};

export default PhraseForm;