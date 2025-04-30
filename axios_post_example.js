const axios = require('axios');

// Your credentials
// const email = 'syedatamannasheme@gmail.com';
//const apiKey = 'ATATT3xFfGF0A6qyHjqX8WUWwmiYV_1dn86OuryCjUJ6qaKLYwkhljiW2JeEUvOyA8xd39NM0SGsqEP7ar03ZuCcXLMwVV43JrwNRSBqAAcWpNn20vNMTyO9S8N-V_02lKXmngUszQRsZkbMD9MApROMOYQrc5C_yCmdSvNOnr2Rc9BG7i-Udyc=92B0EA29';
// Encode the email:apiKey to base64
const authToken = Buffer.from(`${email}:${apiKey}`).toString('base64');

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${authToken}`
};

// Your TestRail API endpoint and payload
const url = 'https://chatbotv1.testrail.io/index.php?/api/v2/add_run/1';

const payload = {
  suite_id: 1,
  name: "Automated Run from Jest JSON",
  include_all: false,
  case_ids: []
};

axios.post(url, payload, { headers })
  .then(response => {
    console.log('✅ Test run created:', response.data);
  })
  .catch(error => {
    console.error('❌ Error:', error.response?.data || error.message);
  });
