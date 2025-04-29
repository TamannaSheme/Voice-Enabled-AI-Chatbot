module.exports = {
  reporters: [
    "default",
    ["jest-testrail", {
      configFile: "./testrail.config.js"
    }]
  ]
};
