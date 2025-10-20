module.exports = function(config) {
  const path = require('path');
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
          // Use ts-loader with the test-specific tsconfig for spec files
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
              options: {
                // Point to the spec-specific tsconfig so tests compile with jasmine types
                configFile: 'tsconfig.spec.json',
                // Use transpileOnly for faster test builds; keep type checking lighter during test runs
                transpileOnly: true
              }
            },
            exclude: /node_modules/
          },
          { test: /\.css$/, use: ['style-loader','css-loader'] },
          { test: /\.(png|jpg|svg|webp)$/, type: 'asset/resource' },
          // Post-loader: instrument source files for coverage (exclude tests)
          {
            enforce: 'post',
            test: /\.tsx?$/,
            include: [path.resolve(__dirname, 'src')],
            exclude: [/\.spec\.tsx?$/, /node_modules/],
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            }
          }
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