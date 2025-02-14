import React, { useState } from 'react';
import PhraseForm from './components/PhraseForm';
import PhraseList from './components/PhraseList';
import './App.css';

function App() {
  const [phrases, setPhrases] = useState([]);

  // Función para agregar una nueva frase
  const addPhrase = (phrase) => {
    setPhrases([...phrases, phrase]);
  };

  // Función para eliminar una frase
  const deletePhrase = (index) => {
    const newPhrases = phrases.filter((_, i) => i !== index);
    setPhrases(newPhrases);
  };

  return (
    <div className="App">
      <h1>Gestor de Frases</h1>
      <PhraseForm addPhrase={addPhrase} />
      <PhraseList phrases={phrases} deletePhrase={deletePhrase} />
    </div>
  );
}

export default App;