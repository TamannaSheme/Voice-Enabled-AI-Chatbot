module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  reporters: ["default", "./customJestReporter.js"]
};