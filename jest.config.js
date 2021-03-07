module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules',
    '/dist'
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json'
    }
  },
  roots: [
    'test'
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  }
};
