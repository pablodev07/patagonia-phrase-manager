import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhraseCard from '../PhraseCard';

describe('PhraseCard', () => {
  const phrase = 'Frase de prueba';
  const onDeleteMock = jest.fn();
  const onEditMock = jest.fn();

  it('muestra la frase y los botones de editar y eliminar', () => {
    render(<PhraseCard phrase={phrase} onDelete={onDeleteMock} onEdit={onEditMock} />);

    expect(screen.getByText(phrase)).toBeInTheDocument();
    expect(screen.getByLabelText('Editar frase')).toBeInTheDocument();
    expect(screen.getByLabelText('Eliminar frase')).toBeInTheDocument();
  });

  it('permite editar una frase', () => {
    render(<PhraseCard phrase={phrase} onDelete={onDeleteMock} onEdit={onEditMock} />);

    const editButton = screen.getByLabelText('Editar frase');
    fireEvent.click(editButton);

    const input = screen.getByDisplayValue(phrase);
    const saveButton = screen.getByLabelText('Guardar frase editada');

    fireEvent.change(input, { target: { value: 'Frase editada' } });
    fireEvent.click(saveButton);

    expect(onEditMock).toHaveBeenCalledWith('Frase editada');
  });

  it('permite eliminar una frase', () => {
    render(<PhraseCard phrase={phrase} onDelete={onDeleteMock} onEdit={onEditMock} />);

    const deleteButton = screen.getByLabelText('Eliminar frase');
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalled();
  });
});