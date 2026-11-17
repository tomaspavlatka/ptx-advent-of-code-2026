/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1", // supports absolute imports
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"],
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  testMatch: ["**/*.spec.ts"], // only run spec files
};
