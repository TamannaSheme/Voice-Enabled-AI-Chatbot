document.getElementById("save-btn").addEventListener("click", function() {
    alert("Account settings saved successfully!");
  });
  
  document.getElementById("logout-btn").addEventListener("click", function() {
    alert("You have been logged out!");
    window.location.href = "index.html"; // redirect to index file
  });
  