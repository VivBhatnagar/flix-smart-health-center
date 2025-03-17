import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: [
    "**/__tests__/**/*.ts?(x)", 
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@common/(.*)$": "<rootDir>/src/common/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
  },
  verbose:true,
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest",{
      configFile: './.babelrc.jest',
    }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;