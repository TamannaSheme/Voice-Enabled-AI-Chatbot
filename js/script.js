// Voice Input Function
function startVoice(fieldId) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById(fieldId).value = transcript;
  };

  recognition.onerror = function (event) {
    alert("Voice input error: " + event.error);
  };
}

// Redirect Function
function redirectToRolePage() {
  const studentId = document.getElementById("studentId").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (studentId && phone && email) {
    window.location.href = "role.html"; // Replace with your role selection page filename
  } else {
    alert("Please fill in all fields before submitting.");
  }
}
