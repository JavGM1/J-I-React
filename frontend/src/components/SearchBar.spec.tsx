import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renderiza y llama onSearch al escribir y al submit', () => {
    const onSearch = jasmine.createSpy('onSearch');
    render(<SearchBar onSearch={onSearch} placeholder="Buscar..." />);

    const input = screen.getByPlaceholderText(/buscar/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'mesa' } });
    expect(onSearch).toHaveBeenCalled();

    const btn = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(btn);
    // onSearch también llamado en submit
    expect(onSearch).toHaveBeenCalled();
  });
});
