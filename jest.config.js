// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: '@shelf/jest-mongodb',
  // The root directory that Jest should scan for tests and modules within
  rootDir: 'lib',
  // The test environment that will be used for testing
  testEnvironment: 'node',
};
