import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppNavbar from './Navbar';

describe('AppNavbar', () => {
  it('renderiza marca y enlaces y llama setCategory al seleccionar dropdown', async () => {
    const setCategory = jasmine.createSpy('setCategory');
    render(<AppNavbar setCategory={setCategory} itemCount={2} />);

    expect(screen.getByText(/j&i muebles/i)).toBeDefined();

  // Abrir el dropdown "Muebles" antes de buscar el item
  const toggle = screen.getByRole('button', { name: /muebles/i });
  fireEvent.click(toggle);

  const living = await screen.findByText(/living/i);
    fireEvent.click(living);

    expect(setCategory).toHaveBeenCalledWith('living');
  });
});
