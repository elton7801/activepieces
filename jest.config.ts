import type { Config } from '@jest/types';

// Jest configuration
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  projects: [
    '<rootDir>/packages/engine',
    '<rootDir>/packages/server/api',
    '<rootDir>/packages/shared',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;