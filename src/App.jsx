import React from 'react';
import PhraseForm from './components/PhraseForm';
import { PhraseProvider } from './context/PhraseContext';
import './App.css';
import PhraseListWithSearch from './components/PhraseListWithSearch';

function App() {
  return (
    <PhraseProvider>
      <div className="app">
        <div className="py-7 px-10 rounded-xl lg:rounded-3xl bg-linear-to-r from-orange-700 to-orange-300 mb-10 w-full lg:w-[780px] lg:mx-auto">
          <h1 className="font-bold text-white text-2xl lg:text-[3em]">Gestor de Frases</h1>
        </div>
        <PhraseForm />
        <PhraseListWithSearch />
      </div>
    </PhraseProvider>
  );
}

export default App;