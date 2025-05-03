class CustomJestReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
      const fs = require('fs');
      const path = require('path');
      const testrailResults = results.testResults.flatMap(suite =>
        suite.testResults.map(test => ({
          case_id: extractCaseId(test.title),
          status_id: test.status === 'passed' ? 1 : 5, // 1 = Passed, 5 = Failed
          comment: test.failureMessages.join('\n') || 'Test passed.',
        }))
      );
  
      fs.writeFileSync(
        path.join(__dirname, 'testrail_results.json'),
        JSON.stringify({ results: testrailResults }, null, 2)
      );
  
      console.log('✅ TestRail results written to testrail_results.json');
    }
  }
  
  function extractCaseId(title) {
    const match = title.match(/\[C(\d+)\]/);
    return match ? parseInt(match[1], 10) : null;
  }
  
  module.exports = CustomJestReporter;
  