import React, { useState } from 'react';
import { FaFaceSadTear } from "react-icons/fa6";
import PropTypes from 'prop-types'; // Importar PropTypes

const withSearch = (WrappedComponent) => {
  const WithSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPhrases = props.phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar frases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input py-4 px-5 rounded-lg bg-gray-100 mb-5 w-full lg:w-auto"
        />
        {searchTerm && filteredPhrases.length === 0 ? (
          <div className="flex flex-col items-center text-center text-black w-full bg-amber-200 py-5">
            <FaFaceSadTear className="mr-3 text-xl mb-3" />
            <p className="text-xs">
              No hay frases que coincidan con la búsqueda. Intentá nuevamente.
            </p>
          </div>
        ) : (
          <WrappedComponent {...props} phrases={filteredPhrases} />
        )}
      </div>
    );
  };

  WithSearch.propTypes = {
    phrases: PropTypes.arrayOf(PropTypes.string)
  };

  return WithSearch;
};

export default withSearch;