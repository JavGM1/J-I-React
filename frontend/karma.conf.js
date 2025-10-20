module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/setupTests.ts', watched: false },
      { pattern: 'src/**/*.spec.tsx', watched: true }
    ],
    preprocessors: {
      'src/setupTests.ts': ['webpack', 'sourcemap'],
      'src/**/*.spec.tsx': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
      module: {
        rules: [
          { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
          { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.(png|jpg|svg|webp)$/, type: 'asset/resource' }
        ]
      },
      devtool: 'inline-source-map'
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: { type: 'html', dir: 'coverage/' },
    // Serve image assets directly so requests to /img/* resolve in tests
    files: [
      { pattern: 'src/setupTests.ts', watched: false },
      { pattern: 'src/**/*.spec.tsx', watched: true },
      { pattern: 'public/img/**', watched: false, included: false, served: true }
    ],
    // Proxy /img/* to the served public/img files under /base/public/img/
    proxies: {
      '/img/': '/base/public/img/'
    },
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    singleRun: true,
    concurrency: Infinity
  });
};