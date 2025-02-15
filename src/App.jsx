import React from 'react';
import PhraseForm from './components/PhraseForm';
import { PhraseProvider } from './context/PhraseContext';
import './App.css';
import PhraseListWithSearch from './components/PhraseListWithSearch';

function App() {
  return (
    <PhraseProvider>
      <div className="app">
        <div className="py-7 px-10 rounded-3xl bg-linear-to-r from-orange-700 to-orange-300 mb-10">
          <h1 className="font-bold text-white text-[3em]">Gestor de Frases</h1>
        </div>
        <PhraseForm />
        <PhraseListWithSearch />
      </div>
    </PhraseProvider>
  );
}

export default App;