class CustomJestReporter {
  onRunComplete(_, results) {
    const fs = require('fs');
    fs.writeFileSync('testrail_results.json', JSON.stringify(results, null, 2));
    console.log("✅ TestRail results written to testrail_results.json");
  }
}
module.exports = CustomJestReporter;