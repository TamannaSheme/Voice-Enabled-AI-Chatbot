describe("Voice Chatbot Functionality", () => {
  test("should return a welcome message", () => {
    const response = getWelcomeMessage(); 
    expect(response).toBe("Welcome to Lumi!");
  });

  test("should fail when unexpected input", () => {
    const response = handleInput(null);
    expect(response).not.toBe("Valid input");
  });
});

function getWelcomeMessage() {
  return "Welcome to Lumi!";
}

function handleInput(input) {
  return input ? "Valid input" : "Invalid";
}
