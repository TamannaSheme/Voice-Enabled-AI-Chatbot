const fs = require("fs");
const path = require("path");

class CustomTestRailReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
    this.results = [];
  }

  onTestResult(test, testResult) {
    testResult.testResults.forEach((result) => {
      const title = result.title;
      const match = title.match(/\[C(\d+)]/);  // looks for [C123] case ID
      if (match) {
        this.results.push({
          case_id: parseInt(match[1], 10),
          status_id: result.status === "passed" ? 1 : 5,
          comment: result.status === "passed" ? "Test passed via automation" : "Test failed via automation",
        });
      }
    });
  }

  onRunComplete() {
    const outputPath = path.resolve(__dirname, "testrail_results.json");
    fs.writeFileSync(outputPath, JSON.stringify({ results: this.results }, null, 2));
    console.log(`TestRail results written to ${outputPath}`);
  }
}

module.exports = CustomTestRailReporter;