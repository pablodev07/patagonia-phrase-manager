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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar una frase..."
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default PhraseForm;