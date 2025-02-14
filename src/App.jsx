import React from 'react';
import PhraseForm from './components/PhraseForm';
import { PhraseProvider } from './context/PhraseContext';
import './App.css';
import PhraseListWithSearch from './components/PhraseListWithSearch';

function App() {
  return (
    <PhraseProvider>
      <div className="App">
        <h1>Gestor de Frases</h1>
        <PhraseForm />
        <PhraseListWithSearch />
      </div>
    </PhraseProvider>
  );
}

export default App;