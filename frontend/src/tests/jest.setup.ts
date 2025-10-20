// Jest setup: extend expect or add globals if needed
import '@testing-library/jest-dom';

// Silence console logs during tests unless explicitly needed
if (typeof jest !== 'undefined') {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
}
