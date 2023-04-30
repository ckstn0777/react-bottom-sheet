const config = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};

module.exports = config;
