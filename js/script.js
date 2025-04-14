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

function redirectToRolePage() {
  const studentIdInput = document.getElementById("studentId");
  const phoneNumberInput = document.getElementById("phoneNumber");
  const emailInput = document.getElementById("email");

  const studentId = studentIdInput.value.trim();
  const phoneNumber = phoneNumberInput.value.trim();
  const email = emailInput.value.trim();

  if (studentId && phoneNumber && email) {
    // Voice response
    const message = "Information submitted successfully.";
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(message);
    utter.lang = "en-US";
    synth.speak(utter);

    // Clear input fields
    studentIdInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
  } else {
    alert("Please fill in all fields before submitting.");
  }
}
