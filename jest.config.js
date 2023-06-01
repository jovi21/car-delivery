module.exports = {
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@modules/(.*)$': '<rootDir>/src/app/modules/$1',
    '^@models/(.*)$': '<rootDir>/src/app/models/$1',
    '^@mocks/(.*)$': '<rootDir>/src/app/mocks/$1',
    '^@services/(.*)$': '<rootDir>/src/app/services/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1'
  },
  preset: 'jest-preset-angular',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
