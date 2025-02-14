import React, { useState } from 'react';

const PhraseForm = ({ addPhrase }) => {
  const [phrase, setPhrase] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phrase.trim()) {
      addPhrase(phrase); // Envía la frase al componente principal
      setPhrase(''); // Limpia el campo de texto
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