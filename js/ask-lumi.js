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
  
  function speakMessage(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    synth.speak(utterance);
  }
  
  function respondToUser() {
    const questionBox = document.getElementById("question");
    const question = questionBox.value.trim();
  
    if (question !== "") {
      const response = "Your question has been submitted successfully!";
  
      // Show response message in responseBox
      const responseBox = document.getElementById("response");
      responseBox.innerText = response;
  
      // Speak the message
      speakMessage(response);
  
      // Clear the input box
      questionBox.value = "";
    } else {
      alert("Please enter a question before submitting.");
    }
  }
  