import React, { useState } from 'react';

const withSearch = (WrappedComponent) => {
  return (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const phrases = props.phrases || [];

    const filteredPhrases = phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar frases..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <WrappedComponent {...props} phrases={filteredPhrases} />
      </div>
    );
  };
};

export default withSearch;