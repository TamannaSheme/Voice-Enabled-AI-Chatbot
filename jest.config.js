module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  reporters: ["default", "./customJestReporter.js"]
};