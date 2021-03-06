// this file can be removed when we get rid of acceptance tests
module.exports = {
  testPathIgnorePatterns: ['/node_modules/', 'test/acceptance'],
  setupFiles: ['<rootDir>/test/unit/setup.js'],
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js'
  }
}
