/// <reference types="jasmine" />
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import type { Product } from '../data/db';

// Prueba básica: verifica que ProductCard renderiza nombre, precio y el botón de agregar
describe('ProductCard (básica)', () => {
  const product: Product = {
  id: 1,
  name: 'Producto prueba',
  image: 'escritorio',
    description: '',
    price: 129990,
    category: 'oficina',
    specs: {
      materials: ['Madera'],
      dimensions: '120x60x75cm',
      color: 'Amaderado',
      weight: '50kg',
      warranty: '1 año'
    }
  };

  it('renderiza nombre, precio y el botón de agregar', () => {
    const addSpy = jasmine.createSpy('addToCart');
    render(<ProductCard product={product} addToCart={addSpy} />);

    // Para depuración si algo no aparece, descomenta:
    // screen.debug();

    expect(screen.getByText(/producto prueba/i)).toBeDefined();
    const formatted = `$${product.price.toLocaleString('es-CL')}`;
    expect(screen.getByText(formatted)).toBeDefined();

    // Hay dos botones en el card (Ver detalles y Agregar). Seleccionamos por title
    const addBtn = screen.getByTitle('Agregar al carrito');
    expect(addBtn).toBeDefined();

    fireEvent.click(addBtn);
    expect(addSpy).toHaveBeenCalledWith(product);
  });
});
