import { renderHook, act } from '@testing-library/react';
import { useCart } from './useCart';
import { db } from '../data/db';

describe('useCart', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('agrega y elimina productos del carrito y calcula totales', () => {
    const { result } = renderHook(() => useCart());
    const first = db[0];

    act(() => {
      result.current.addToCart(first);
    });

    expect(result.current.cart.length).toBeGreaterThan(0);
    expect(result.current.itemCount).toBeGreaterThan(0);

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.cart.length).toBe(0);
  });
});
