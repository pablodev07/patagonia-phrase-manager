import React, { useContext } from 'react';
import withSearch from '../hocs/withSearch.jsx';
import { PhraseContext } from '../context/PhraseContext';
import PhraseList from './PhraseList';

const PhraseListWithSearch = withSearch(PhraseList);

export default () => {
  const { phrases, deletePhrase, editPhrase } = useContext(PhraseContext);
  return (
    <div>
      <PhraseListWithSearch
        phrases={phrases}
        deletePhrase={deletePhrase}
        editPhrase={editPhrase}
      />
      {phrases.length === 0 && (
        <p className="font-bold text-center text-gray-500 mt-4">
          No hay frases para mostrar. Agregá nuevas frases en el campo de arriba.
        </p>
      )}
    </div>
  );
};