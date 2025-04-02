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
  