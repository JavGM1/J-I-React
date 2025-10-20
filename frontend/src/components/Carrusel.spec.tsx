import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrusel from './Carrusel';

describe('Carrusel', () => {
  beforeAll(() => {
    // Evitar que el navegador realice peticiones al asignar src en tests
    Object.defineProperty(global.Image.prototype, 'src', {
      set() {
        /* noop durante tests para evitar 404 */
      }
    });
  });

  it('renderiza imágenes del carrusel', () => {
    render(<Carrusel />);
    expect(screen.getByAltText(/Living/i)).toBeDefined();
    expect(screen.getByAltText(/Cocina/i)).toBeDefined();
    expect(screen.getByAltText(/Baño/i)).toBeDefined();
  });
});
