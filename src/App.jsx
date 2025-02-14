
import React, { useState } from 'react';
import PhraseCard from './components/PhraseCard';
import './App.css';

function App() {
  const [phrases, setPhrases] = useState([]);

  const addPhrase = (phrase) => {
    setPhrases([...phrases, phrase]);
  };

  const deletePhrase = (index) => {
    const newPhrases = phrases.filter((_, i) => i !== index);
    setPhrases(newPhrases);
  };

  return (
    <div className="App">
      <h1>Gestor de Frases</h1>
      {/* Aquí iría el formulario y la lista de frases */}
      {phrases.map((phrase, index) => (
        <PhraseCard
          key={index}
          phrase={phrase}
          onDelete={() => deletePhrase(index)}
        />
      ))}
    </div>
  );
}

export default App;