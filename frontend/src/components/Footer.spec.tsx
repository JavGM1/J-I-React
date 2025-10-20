import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renderiza nombre y email de contacto', () => {
    render(<Footer />);
    expect(screen.getByText(/J&I Muebles/i)).toBeDefined();
    expect(screen.getByText(/contacto@jimuebles.com/i)).toBeDefined();
  });
});
