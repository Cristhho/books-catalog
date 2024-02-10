import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest =  {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  /*transform: {
    "^.+\\.tsx?$": 'ts-jest'
  },*/
  modulePaths: ['<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.ts',
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.ts"
  },
}

export default config
