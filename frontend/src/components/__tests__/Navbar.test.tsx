import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('shows cart count and opens login modal', () => {
  const setCategory = jest.fn();
  const cart = [{ id: 1, name: 'X' }];
  render(<Navbar cart={cart as any} setCategory={setCategory} itemCount={1} /> as any);

  // Cart badge (may appear multiple times in mobile/desktop render)
  expect(screen.getAllByText('1').length).toBeGreaterThan(0);

    // Open contact modal by clicking contact link
    const contacto = screen.getByText(/¡Contáctanos!/i);
    fireEvent.click(contacto);
    // Contact modal should show address or contact email
    expect(screen.getByText(/Dirección:/i)).toBeInTheDocument();
    expect(screen.getByText(/contacto@jimuebles.com/i)).toBeInTheDocument();
  });
});
