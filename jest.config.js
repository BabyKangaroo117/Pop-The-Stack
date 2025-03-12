/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  globals: {
    'ts-jest': {
      allowImportingTsExtensions: true, 
    },
  },
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};