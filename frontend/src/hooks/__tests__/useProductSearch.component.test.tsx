// React import not required here (JSX handled by tsconfig)
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { useProductSearch } from '../useProductSearch';
import { db } from '../../data/db';

function TestSearch({ products }: { products: any[] }) {
  const { query, filtered } = useProductSearch(products);
  return (
    <div>
      <div data-testid="query">{query}</div>
      <div data-testid="count">{filtered.length}</div>
    </div>
  );
}

describe('useProductSearch (component pattern)', () => {
  it('updates when window app:search event is dispatched', () => {
    render(<TestSearch products={db} />);
    // initial should show all products
    expect(screen.getByTestId('count').textContent).toBe(String(db.length));

    // dispatch a search event wrapped in act so React updates are flushed
    act(() => {
      window.dispatchEvent(new CustomEvent('app:search', { detail: 'sofá' }));
    });
    // after dispatch, the hook should update query/filter
    expect(screen.getByTestId('query').textContent?.toLowerCase()).toContain('sofá');
  });
});
