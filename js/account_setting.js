// account_setting.js

document.getElementById("save-btn").addEventListener("click", function() {
    alert("Account settings saved successfully!");
  });
  
  document.getElementById("logout-btn").addEventListener("click", function() {
    alert("You have been logged out!");
    window.location.href = "login.html"; // Redirect to login page if available
  });
  