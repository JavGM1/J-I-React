import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('calls onSearch on change and on submit', () => {
  const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} placeholder="Buscar..." />);

    const input = screen.getByPlaceholderText('Buscar...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'mesa' } });
    expect(onSearch).toHaveBeenCalledWith('mesa');

    // Submit the form
    fireEvent.submit(input.closest('form')!);
    // should have been called at least twice (change + submit)
    expect(onSearch).toHaveBeenCalledTimes(2);
  });
});
