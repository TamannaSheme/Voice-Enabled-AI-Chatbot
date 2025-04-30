
function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const message = document.createElement('p');
  message.textContent = input.value;
  chatBox.appendChild(message);
  input.value = '';
}

if (typeof module !== 'undefined') {
  module.exports = { sendMessage };
}
