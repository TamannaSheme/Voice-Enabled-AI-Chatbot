function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    if (input && chatBox) {
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = input.value;
        chatBox.appendChild(userMessage);
        input.value = "";
    }
}
window.sendMessage = sendMessage;
global.sendMessage = sendMessage;