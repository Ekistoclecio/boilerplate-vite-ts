import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/@types'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/main.tsx',
    '!src/**/*.stories.tsx',
    '!src/@types/**',
    '!src/**/stories.tsx',
    '!src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '!src/**/*.mdx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.app.json' }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};

export default config;
