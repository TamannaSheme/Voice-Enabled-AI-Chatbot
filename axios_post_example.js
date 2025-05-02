const axios = require("axios");
const fs = require("fs");
const path = require("path");

const testRailUrl = "https://chatbotv1.testrail.io";
const runId = 1; // Update with your actual test run ID
const username = "syedatamannasheme@gmail.com";
const apiKey = "R9g0z80MyMtVWOMPbp2/-HyNRUhiS7TOSnGAmcxXb";

const dataPath = path.join(__dirname, "testrail_results.json");
if (!fs.existsSync(dataPath)) {
  console.error("❌ No test result file found!");
  process.exit(1);
}

const testResults = JSON.parse(fs.readFileSync(dataPath, "utf8"));

axios.post(`${testRailUrl}/index.php?/api/v2/add_results_for_cases/${runId}`, testResults, {
  auth: {
    username: username,
    password: apiKey
  },
  headers: {
    "Content-Type": "application/json"
  }
})
.then((response) => {
  console.log("✅ Successfully uploaded test results to TestRail");
})
.catch((error) => {
  console.error("❌ Failed to upload test results:", error.response?.data || error.message);
});