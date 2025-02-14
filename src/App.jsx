import React from 'react';
import PhraseForm from './components/PhraseForm';
import PhraseList from './components/PhraseList';
import { PhraseProvider } from './context/PhraseContext';
import './App.css';

function App() {
  return (
    <PhraseProvider>
      <div className="App">
        <h1>Gestor de Frases</h1>
        <PhraseForm />
        <PhraseList />
      </div>
    </PhraseProvider>
  );
}

export default App;