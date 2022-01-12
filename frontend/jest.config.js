const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['./src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['./src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: './'
  }),
  setupFiles: ['./setup-jest.ts'],
  reporters: [
      'default',
      ['./node_modules/jest-html-reporter', {
          pageTitle: 'Test Report', 
          outputPath: './coverage/test-report.html'
      }]
  ]
};