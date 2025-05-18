const config = {
  paths: ['tests/acceptance/features/**/*.feature'],
  import: ['tests/acceptance/steps/**/*.ts'],
  requireModule: ['ts-node/esm'],
  format: ['json:target/cucumber-report.json', 'progress', 'html:target/cucumber-report.html'],
  formatOptions: { snippetInterface: 'async-await' },
};

export default config;
