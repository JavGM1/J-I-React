// Global test setup: stub out image loading to avoid network 404s in Karma
// This will run before any spec since it is listed first in karma.conf.js
Object.defineProperty(window, 'Image', {
  writable: true,
  configurable: true,
  value: class {
    public src = '';
    constructor() {}
    // provide a no-op setter so assigning src doesn't try to load in Karma's server
    setSrc(v: string) { this.src = v; }
  }
});

// Also ensure global fetch is a no-op in tests if not present (defensive)
if (!(window as any).fetch) {
  (window as any).fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
}

// Prevent HTML <img> elements from triggering network requests during tests.
// Some components render <img src="/img/whatever.jpg"/>, which makes Karma's
// static server log 404s if the asset isn't present. Override the src setter
// on HTMLImageElement to store the value without performing a network load.
try {
  Object.defineProperty(HTMLImageElement.prototype, 'src', {
    configurable: true,
    set(this: HTMLImageElement, v: string) {
      // store on a data attribute so tests can still assert on it if needed
      this.setAttribute('data-test-src', v);
    },
    get(this: HTMLImageElement) {
      return this.getAttribute('data-test-src') || '';
    }
  });
} catch (e) {
  // ignore if environment doesn't allow redefining
}
