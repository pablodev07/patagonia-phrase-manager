import React, { useState } from 'react';
import { FaPen, FaTrashCan, FaCheck } from "react-icons/fa6";

const PhraseCard = ({ phrase, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPhrase, setEditedPhrase] = useState(phrase);
  const [error, setError] = useState('');

  const handleSave = () => {
    if (editedPhrase.trim() === '') {
      setError('El campo no puede estar vacío.');
      return;
    }
    onEdit(editedPhrase);
    setIsEditing(false);
    setError('');
  };

  return (
    <div className="phrase-card flex bg-black rounded-3xl p-4 rounded-lg shadow-md w-[250px] max-w-[250px]  h-full">
      {isEditing ? (
        <div className="flex flex-col w-full justify-end">
          <textarea
            value={editedPhrase}
            onChange={(e) => {
              setEditedPhrase(e.target.value);
              setError('');
            }}
            className="border p-2 rounded-lg bg-gray-300 resize-none mb-2"
            rows={3} 
          />
          {error && (
            <p className="text-pink-800 text-sm">{error}</p>
          )}
          <button
            onClick={handleSave}
            className="text-white px-4 py-2 rounded hover:bg-lime-600 w-fit ml-auto"
          >
            <FaCheck/>
          </button>
        </div>
      ) : (
        <div className="flex flex-col break-words overflow-hidden w-full">
          <p className="text-left font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r from-orange-700 to-orange-300 flex-grow mb-2">{phrase}</p>
          <div className="flex space-x-2 mt-auto justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-transparent text-white px-4 py-2 rounded hover:bg-cyan-600"
            >
              <FaPen/>
            </button>
            <button
              onClick={onDelete}
              className="bg-transparent text-white px-4 py-2 rounded hover:bg-pink-800"
            >
              <FaTrashCan/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhraseCard;