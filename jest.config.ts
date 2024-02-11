import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest =  {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  /*transform: {
    "^.+\\.tsx?$": 'ts-jest'
  },*/
  modulePaths: ['<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.ts',
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.ts"
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}

export default config
