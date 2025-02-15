import React, { useState, useContext } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
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
    <form onSubmit={handleSubmit} className="phraseForm mb-10 flex flex-col">
      <h2 className="text-orange-500 font-bold text-md lg:text-xl mb-2">Tipeá una frase para guardar </h2>
      <textarea
        type="text"
        placeholder="Ingresá tu frase..."
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        className="w-full py-4 px-5 rounded-lg bg-gray-100 resize-none mb-5 w-[250px]"
        rows={2}
      />
      <button className="flex justify-center items-center p-3 lg:p-5 font-bold text-white rounded-xl w-[250px] mx-auto bg-linear-to-r from-orange-700 to-orange-300 hover:cursor-pointer" type="submit">Agregar<FaCirclePlus className="ml-2"/></button>
    </form>
  );
};

export default PhraseForm;