import React from 'react';
import { render, screen } from '@testing-library/react';
import PhraseList from '../PhraseList';

describe('PhraseList', () => {
  const phrases = ['Frase 1', 'Frase 2', 'Frase 3'];
  const deletePhraseMock = jest.fn();
  const editPhraseMock = jest.fn();

  it('renderiza la lista de frases', () => {
    render(
      <PhraseList
        phrases={phrases}
        deletePhrase={deletePhraseMock}
        editPhrase={editPhraseMock}
      />
    );

    phrases.forEach((phrase) => {
      expect(screen.getByText(phrase)).toBeInTheDocument();
    });
  });
});