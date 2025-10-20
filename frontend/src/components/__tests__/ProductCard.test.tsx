import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Mesa de comedor',
    price: 120,
    image: 'mesa',
    specs: {
      materials: ['Madera'],
      color: 'Roble',
      dimensions: '200x100x75',
      weight: '30kg',
      warranty: '2 años'
    }
  } as any;

  it('renders product info and triggers addToCart', () => {
    const addToCart = jest.fn();
    render(<ProductCard product={product} addToCart={addToCart} />);

    expect(screen.getByText('Mesa de comedor')).toBeInTheDocument();
    expect(screen.getByText(/120/)).toBeInTheDocument();

    const verDetalles = screen.getByText(/ver detalles/i);
    fireEvent.click(verDetalles);
    // modal should show description
    expect(screen.getByText(/Material:/i)).toBeInTheDocument();

    const agregarBtn = screen.getByTitle(/Agregar al carrito/i);
    fireEvent.click(agregarBtn);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
