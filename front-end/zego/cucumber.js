const config = {
  paths: ['tests/acceptance/features/**/*.feature'],
  require: ['tests/acceptance/step_definitions/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['json:target/cucumber-report.json', 'pretty', 'html:target/cucumber-report.html'],
  formatOptions: { snippetInterface: 'async-await' },
  publishQuiet: true,
};

module.exports = { default: config };
