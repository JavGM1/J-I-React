import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrusel from './Carrusel';

describe('Carrusel', () => {
  beforeAll(() => {
    // Evitar que el navegador realice peticiones al asignar src en tests
    // Use a TypeScript-safe access via globalThis and HTMLImageElement prototype
    try {
      const proto = (globalThis as any).HTMLImageElement?.prototype;
      if (proto) {
        Object.defineProperty(proto, 'src', {
          set() {
            /* noop durante tests para evitar 404 */
          }
        });
      }
    } catch (e) {
      // Silently ignore in environments where HTMLImageElement is not configurable
    }
  });

  it('renderiza imágenes del carrusel', () => {
    render(<Carrusel />);
    expect(screen.getByAltText(/Living/i)).toBeDefined();
    expect(screen.getByAltText(/Cocina/i)).toBeDefined();
    expect(screen.getByAltText(/Baño/i)).toBeDefined();
  });
});
